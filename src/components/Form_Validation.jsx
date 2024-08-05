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

const Form_Validation = () => {
  const form = useForm();

  const onSubmit = () => {};
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
                // description="At least 3 Characters"
                formControl={form.control}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base md:text-lg text-blue-700">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter Description"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Enter valid Description according to you
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full text-base" size="lg">
                Submit
              </Button>
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
          {/* showing error message */}
          {description && <FormDescription>{description}</FormDescription>}
          {/* above commit kiva hua part show karvana  */}
          <FormMessage className="text-xs md:text-sm " />
        </FormItem>
      )}
    />
  );
};
