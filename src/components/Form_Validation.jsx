"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { AlertCircle } from "lucide-react";

const ZodValidation = z.object({
  name: z
    .string()
    .min(3, { message: "Name must contain least 3 character" })
    .max(50, { message: "Name must contain at maximum 50 character" }),
  email: z.string().email(),
  message: z
    .string()
    .min(10, { message: "Message must contain at least 10 character" })
    .max(500, { message: "Message must contain at maximum 500 character" }),
});

const Form_Validation = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    /*whom through validate*/ resolver: zodResolver(ZodValidation),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (value) => {
    setLoading(true);
    try {
      const name = value.name;
      const email = value.email;
      const message = value.message;

      const userExist = await fetch("/api/userExits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const { user } = await userExist.json();

      if (user) {
        setLoading(false);
        return toast(`${email}`, {
          description:
            "Above Email Id Already send feedback to Us! Try to Send Feedback with another Email Id",
          className:
            "group-[.toaster]:border-2 group-[.toaster]:border-red-400 group-[.toaster]:bg-red-200",
        });
      }
      const register = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (register.ok) {
        form.reset();
        setLoading(false);
        return toast(`${name}`, {
          description: "Your Feedback successfully received Us!",
          className:
            "group-[.toaster]:border-2 group-[.toaster]:border-green-400 group-[.toaster]:bg-green-200",
          action: {
            label: "Close",
            onClick: () => console.log("Close"),
          },
        });
      } else {
        console.log("Connecting Client to Server Error");
      }
    } catch (error) {
      console.log("Error on Form Validation side", error);
    }
  };
  return (
    <>
      <div>
        <h1 className="text-2xl capitalize md:text-3xl text-center mb-5 lg:text-4xl font-semibold">
          Contact with me
        </h1>
        <div className="w-[80%] m-auto max-w-[650px] border border-blue-600 rounded-xl p-7 my-5">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 w-full h-fit"
            >
              <SignupFormField
                name="name"
                label="Name"
                placeholder="Enter the Name"
                inputType="text"
                formControl={form.control}
              />
              <SignupFormField
                name="email"
                label="Email"
                placeholder="Enter the Email"
                description="Above Email You can send for Feedback only one time"
                formControl={form.control}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base md:text-lg text-blue-700">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter Your Message"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Enter Valid Message according to you
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {loading ? (
                <Button
                  disabled
                  className="w-full text-base dark:bg-[#60a5fa] bg-[#1e40af] md:text-lg"
                  size="lg"
                >
                  Please wait
                  <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="w-full text-base dark:bg-[#60a5fa] bg-[#1e40af] md:text-lg"
                  size="lg"
                >
                  Submit
                </Button>
              )}
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Form_Validation;

const SignupFormField = ({
  name,
  label,
  placeholder,
  description,
  inputType,
  formControl,
}) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base md:text-lg text-blue-700">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={inputType || "text"}
              {...field}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage className="text-xs md:text-sm " />
        </FormItem>
      )}
    />
  );
};
