"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const Dynamic_Movie = ({ id }) => {
  const unique = id;
  const [data, setdata] = useState([]);
  const [creator, setCreator] = useState([]);
  const [genres, setGenres] = useState([]);
  const [home, setHome] = useState([]);
  const [lang, setLang] = useState([]);
  const [production, setProduction] = useState([]);
  const [productionCountry, setProductionCountry] = useState([]);
  console.log(data);
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
      setdata(data);
      setCreator(data.created_by);
      setGenres(data.genres);
      setHome(data.homepage);
      setLang(data.spoken_languages);
      setProduction(data.production_companies);
      setProductionCountry(data.production_countries);
    } catch (error) {
      console.log("Error on Dynamic_Movie Component side ", error);
    }
  };
  useEffect(() => {
    getMovie(unique);
  }, [unique]);
  return (
    <>
      <div className="p-3 flex flex-col items-center md:flex md:flex-row rounded-md">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt="Laptop"
          width={100}
          height={100}
          priority
          className="h-full w-full md:h-[500px] md:w-[350px] rounded-md object-cover md:mb-[17rem] "
        />
        <div className="p-2 md:pl-10">
          <div className="flex justify-start items-center h-full">
            <h1 className="text-xl font-semibold">{data.original_name}</h1>
          </div>
          <p className="mt-3 text-base text-gray-500">{data.overview}</p>
          <div className="flex mt-3">
            Genres :-
            <p>
              {genres.map((elem) => {
                const { id, name } = elem;
                return (
                  <Badge key={id} className="bg-blue-500 text-white ml-2">
                    {name}
                  </Badge>
                );
              })}
            </p>
          </div>
          <p className="text-lg">
            Release at
            <span className="font-mono font-semibold ml-3">
              {data.first_air_date}
            </span>
          </p>
          {creator.length === 0 ? (
            ""
          ) : (
            <div>
              <p className="my-3 text-lg text-left font-semibold">
                Creators of {data.original_name}
              </p>
              <div className="flex justify-around">
                {creator.map((elem) => {
                  const { credit_id, name, profile_path } = elem;
                  return (
                    <div
                      className="flex justify-center items-center flex-col"
                      key={credit_id}
                    >
                      <Image
                        src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                        alt="Creator"
                        width={100}
                        height={100}
                        priority
                        className="rounded-full w-24 h-24"
                      />
                      <p>{name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <div className="my-4 flex">
            Available Only
            <p className="ml-2">
              {lang.map((elem, index) => {
                const { english_name } = elem;
                return (
                  <Badge className="bg-yellow-400" key={index}>
                    {english_name}
                  </Badge>
                );
              })}
              <span className="ml-2">Language</span>
            </p>
          </div>
          <p>
            Number of {data.original_name} Episodes :-
            <span className="font-mono font-semibold ml-3 text-lg">
              {data.number_of_episodes}
            </span>
          </p>
          <p>
            Number of {data.original_name} Seasons :-
            <span className="font-mono font-semibold ml-3 text-lg">
              {data.number_of_seasons}
            </span>
          </p>
          <p>
            {data.original_name} is Created in :-
            <span className="font-mono font-semibold ml-3 text-lg">
              {data.origin_country}
            </span>
          </p>
          {production.length === 0 ? (
            ""
          ) : (
            <div>
              <p className="my-3 text-lg text-left font-semibold">
                Production Companies are
              </p>
              <div className="grid grid-cols-2 gap-4 sm:flex sm:justify-start sm:items-center sm:h-full">
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
                          className="rounded-xl border border-gray-500 w-24 h-24 object-cover"
                        />
                      ) : (
                        <Image
                          src={`https://image.tmdb.org/t/p/w500/${logo_path}`}
                          alt="Creator"
                          width={100}
                          height={100}
                          priority
                          className="rounded-xl border border-gray-500 w-24 h-24 object-contain"
                        />
                      )}
                      {origin_country === "" ? (
                        ""
                      ) : (
                        <p>Origin in {origin_country}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {productionCountry.length === 0 ? (
            ""
          ) : (
            <div className="my-5">
              <p className="text-lg text-left font-semibold">
                Production Countries are below
              </p>
              {productionCountry.map((elem, index) => {
                const { name } = elem;
                return <p key={index}>{name}</p>;
              })}
            </div>
          )}
          <Link href={home} target="_blank" className="flex justify-end">
            <Badge variant="destructive">Get More Info</Badge>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dynamic_Movie;
