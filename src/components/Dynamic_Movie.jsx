"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { Toggle } from "@/components/ui/toggle";
import { useRouter } from "next/navigation";
import Skeleton_Dynamic_movie from "./Skeleton_Dynamic_movie";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";

const Dynamic_Movie = ({ id }) => {
  const unique = id;
  const [data, setdata] = useState([]);
  const [creator, setCreator] = useState([]);
  const [genres, setGenres] = useState([]);
  const [home, setHome] = useState([]);
  const [lang, setLang] = useState([]);
  const [production, setProduction] = useState([]);
  const [season, setSeason] = useState([]);
  const [productionCountry, setProductionCountry] = useState([]);
  const [poster, setPoster] = useState([]);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const GoBack = () => {
    router.back();
  };
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_API_KEY,
    },
  };
  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${unique}?language=en-US`,
        options
      );
      const data = await response.json();
      console.log(data);
      setLoading(false);
      setdata(data);
      setCreator(data.created_by);
      setGenres(data.genres);
      setHome(data.homepage);
      setSeason(data.seasons);
      setLang(data.spoken_languages);
      setProduction(data.production_companies);
      setProductionCountry(data.production_countries);
      setPoster(data.poster_path);
    } catch (error) {
      console.log("Error on Dynamic_Movie Component side ", error);
    }
  };

  useEffect(() => {
    getMovie();
  }, [unique]);
  return (
    <>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          {loading ? (
            <Skeleton_Dynamic_movie />
          ) : (
            <div className="p-3 flex flex-col items-center md:flex md:flex-row rounded-md lg:flex lg:justify-center lg:items-center">
              {poster === null ? (
                <Image
                  src="/Images/empty.png"
                  alt="empty_img"
                  width={100}
                  height={100}
                  priority
                  className="h-full w-full md:h-[500px] md:w-[300px] lg:w-[400px] lg:h-[550px] rounded-md object-cover md:mb-[20rem]"
                />
              ) : (
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${poster}`}
                  alt="Laptop"
                  width={100}
                  height={100}
                  priority
                  className="h-full w-full md:h-[500px] md:w-[350px] lg:w-[500px] lg:h-[550px] rounded-md object-cover md:mb-[20rem]"
                />
              )}
              <div className="p-2 md:p-0 md:pl-10">
                <div className="flex justify-start items-center space-x-2 md:space-x-6 h-full">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Toggle className="md:border md:border-gray-500">
                          <IoArrowBack
                            className="text-xl md:text-2xl font-extrabold dark:text-white"
                            onClick={GoBack}
                          />
                        </Toggle>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="dark:text-white">Previous Page</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <h1 className="text-xl font-semibold text-center sm:text-2xl dark:text-white">
                    {data.original_name}
                  </h1>
                </div>
                <p className="mt-3 text-base text-gray-500 sm:text-lg dark:text-white">
                  {data.overview}
                </p>
                {genres === "" ? (
                  ""
                ) : (
                  <div className="flex mt-3 dark:text-white">
                    Genres
                    <p className="sm:text-sm">
                      {genres.map((elem) => {
                        const { id, name } = elem;
                        return (
                          <Badge
                            key={id}
                            className="bg-blue-500 text-white ml-2"
                          >
                            {name}
                          </Badge>
                        );
                      })}
                    </p>
                  </div>
                )}

                <p className="text-lg sm:text-lg dark:text-white">
                  Release at
                  <span className="font-mono font-semibold ml-3 sm:text-lg">
                    {data.first_air_date}
                  </span>
                </p>
                {creator.length === 0 ? (
                  ""
                ) : (
                  <div>
                    <p className="my-3 text-lg text-left font-semibold sm:text-xl dark:text-white">
                      Creators of {data.original_name}
                    </p>
                    <div className="flex justify-around space-x-1">
                      {creator.map((elem) => {
                        const { credit_id, name, profile_path } = elem;
                        return (
                          <div
                            className="flex justify-center items-center flex-col"
                            key={credit_id}
                          >
                            {profile_path === null ? (
                              <Image
                                src="/Images/empty.png"
                                alt="empty_img"
                                width={100}
                                height={100}
                                priority
                                className="rounded-xl border border-gray-500 w-24 sm:w-40 sm:h-40 h-24 object-cover"
                              />
                            ) : (
                              <Image
                                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                                alt="Creator"
                                width={100}
                                height={100}
                                priority
                                className="rounded-full w-24 h-24 sm:w-40 sm:h-40"
                              />
                            )}
                            {name === "Not Available" ? (
                              ""
                            ) : (
                              <p className="sm:text-lg dark:text-white">
                                {name}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                <div className="my-4 flex sm:text-lg dark:text-white ">
                  Available languages
                  <p className="ml-2 space-x-1">
                    {lang.map((elem, index) => {
                      const { english_name } = elem;
                      return (
                        <Badge className="bg-yellow-400 sm:text-sm" key={index}>
                          {english_name}
                        </Badge>
                      );
                    })}
                  </p>
                </div>
                <p className="sm:text-lg dark:text-white">
                  Number of {data.original_name} Episodes :-
                  <span className="font-mono font-semibold ml-3 text-lg sm:text-xl">
                    {data.number_of_episodes}
                  </span>
                </p>
                <p className="sm:text-lg dark:text-white">
                  Number of {data.original_name} Seasons :-
                  <span className="font-mono font-semibold ml-3 text-lg sm:text-xl">
                    {data.number_of_seasons}
                  </span>
                </p>
                <p className="sm:text-lg dark:text-white">
                  {data.original_name} is Created in :-
                  <span className="font-mono font-semibold ml-3 text-lg sm:text-xl">
                    {data.origin_country}
                  </span>
                </p>
                {production.length === 0 ? (
                  ""
                ) : (
                  <div>
                    <p className="my-3 text-lg text-left font-semibold sm:text-xl dark:text-white">
                      Production Companies are
                    </p>
                    <div className="grid grid-cols-2 gap-4 sm:flex sm:justify-start sm:items-center sm:h-full md:grid md:grid-cols-4">
                      {production.map((elem) => {
                        const { id, logo_path, origin_country } = elem;
                        return (
                          <div
                            className="flex justify-center items-center flex-col"
                            key={id}
                          >
                            {logo_path === null ? (
                              <Image
                                src="/Images/empty.png"
                                alt="empty_img"
                                width={100}
                                height={100}
                                priority
                                className="rounded-xl border border-gray-500 w-24 h-24 sm:w-40 sm:h-40 object-cover bg-white"
                              />
                            ) : (
                              <Image
                                src={`https://image.tmdb.org/t/p/w500/${logo_path}`}
                                alt="Creator"
                                width={100}
                                height={100}
                                priority
                                className="rounded-xl border border-gray-500 w-24 h-24 sm:w-40 sm:h-40 object-contain bg-white"
                              />
                            )}
                            {origin_country === "" ? (
                              "Not Available"
                            ) : (
                              <p className="sm:text-lg dark:text-white">
                                Origin in {origin_country}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                {season.length === 0 ? (
                  ""
                ) : (
                  <div className="relative top-5 w-[350px] sm:w-[620px] md:w-[378px] lg:w-[580px] space-y-12">
                    <p className="text-lg font-semibold sm:text-xl dark:text-white">
                      Seasons of {data.original_name}
                    </p>
                    <Carousel
                      opts={{
                        align: "start",
                      }}
                    >
                      <CarouselContent className="flex">
                        {season.map((elem) => {
                          const { id, poster_path, name } = elem;
                          return (
                            <CarouselItem
                              key={id}
                              className="basis-[40%] sm:basis-[23%] md:basis-[38%] lg:basis-[29%] mb-10"
                            >
                              {poster_path === null ? (
                                <Image
                                  src="/Images/empty.png"
                                  alt="empty_img"
                                  width={100}
                                  height={100}
                                  priority
                                  className="rounded-xl border border-gray-500 w-32 sm:w-40 sm:h-40 h-36  object-cover"
                                />
                              ) : (
                                <Image
                                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                                  alt="Creator"
                                  width={100}
                                  height={100}
                                  priority
                                  className="rounded-xl border border-gray-500 w-32 sm:w-40 sm:h-40 h-36  object-cover"
                                />
                              )}
                              {name === "" ? (
                                "Not Available"
                              ) : (
                                <span className="sm:text-xs font-semibold dark:text-white">
                                  {name}
                                </span>
                              )}
                            </CarouselItem>
                          );
                        })}
                      </CarouselContent>
                      <div className="absolute top-[-25px] left-[85%] sm:left-[92%] md:left-[85%] lg:left-[92%]">
                        <CarouselPrevious />
                        <CarouselNext />
                      </div>
                    </Carousel>
                  </div>
                )}
                {productionCountry.length === 0 ? (
                  ""
                ) : (
                  <div className="my-5">
                    <p className="text-lg text-left font-semibold sm:text-lg dark:text-white">
                      Production Countries are below
                    </p>
                    {productionCountry.map((elem, index) => {
                      const { name } = elem;
                      return (
                        <p key={index} className="sm:text-lg dark:text-white">
                          {name}
                        </p>
                      );
                    })}
                  </div>
                )}
                {home === "" ? (
                  ""
                ) : (
                  <Link
                    href={home}
                    target="_blank"
                    className="flex justify-end sm:text-base"
                  >
                    <Badge variant="destructive">Get More Info</Badge>
                  </Link>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </AuroraBackground>
    </>
  );
};

export default Dynamic_Movie;
