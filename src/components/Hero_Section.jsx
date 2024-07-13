"use client";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero_Section = ({ NewData }) => {
  const { title, description, image } = NewData;
  return (
    <>
      <main className="bg-[#ecf0f5] relative py-5 dark:bg-black z-0">
        <div className="w-[85%] h-fit m-auto md:p-3">
          <div className="flex flex-col items-center gap-x-4 gap-y-4 pb-[9rem] md:flex-row z-0">
            <div className="space-y-6">
              <p className="text-sm font-semibold md:text-base">
                Join our team &rarr;
              </p>
              <p className="text-3xl font-bold md:text-4xl">{title}</p>
              <p className="text-base text-gray-600 md:text-lg dark:text-white">
                {description}
              </p>
              <Button className="dark:border-2 rounded-lg border-gray-300 active:scale-110 transition ease-in-out dark:bg-white dark:text-black">
                Join Now
              </Button>
            </div>
            <div className="md:mt-0 mt-10 w-full overflow-hidden rounded-xl">
              <Image
                src={image}
                alt="Image"
                className="rounded-xl object-cover hover:scale-125 duration-500"
                width={900}
                height={900}
                priority
              />
            </div>
            <div className="custom-shape-divider-bottom-1720449456">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  className="shape-fill dark:bg-red-600"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero_Section;
