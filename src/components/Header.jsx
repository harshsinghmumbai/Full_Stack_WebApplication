"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const li = [
    { title: "Home", route: "/" },
    { title: "About", route: "/about" },
    { title: "Contact", route: "/contact" },
    { title: "Movie", route: "/movie" },
  ];
  return (
    <>
      <header className="flex p-2 border-b-2 justify-between items-center border-gray-500 md:px-5 lg:px-9 rounded-lg sticky top-0 z-30 bg-white/20 dark:bg-black/20 backdrop-blur-sm">
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <GiHamburgerMenu className="text-2xl font-bold md:hidden" />
            </SheetTrigger>
            <SheetContent side={"left"} className="p-10">
              <SheetHeader>
                <Link href={"/"}>
                  <p className="font-semibold w-fit text-2xl  text-blue-700">
                    Acme Inc
                  </p>
                </Link>
              </SheetHeader>
              <nav className="mt-3 ">
                <ul className="text-lg font-semibold font-serif pt-3">
                  {li.map((item, id) => {
                    const { title, route } = item;
                    return (
                      <Link
                        href={route}
                        key={id}
                        className="focus:text-red-600"
                      >
                        <li className="mb-2">{title}</li>
                      </Link>
                    );
                  })}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <Link href={"/"}>
          <p className="font-semibold w-fit text-2xl lg:order-first text-blue-700 ">
            Acme Inc
          </p>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-lg font-semibold font-serif">
            {li.map((item, id) => {
              const { title, route } = item;
              return (
                <Link href={route} key={id} className="focus:text-red-600">
                  <li>{title}</li>
                </Link>
              );
            })}
          </ul>
        </nav>
        <div className="flex justify-center items-center space-x-3 md:space-x-7">
          <ModeToggle />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="profile" />
            <AvatarFallback>HS</AvatarFallback>
          </Avatar>
        </div>
      </header>
    </>
  );
};

export default Header;
