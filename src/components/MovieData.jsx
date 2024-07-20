"use client";
import { useEffect, useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import Skeleton_Movie from "./Skeleton_Movie";
import Link from "next/link";
import Image from "next/image";

const MovieData = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setloading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_API_KEY,
    },
  };
  const getMovieData = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
        options
      );
      const data = await response.json();
      setloading(false);
      setMovie(data.results);
    } catch (err) {
      console.log("Error during fetching api", err);
    }
  };
  useEffect(() => {
    getMovieData();
  }, []);
  return (
    <>
      {loading ? (
        <Skeleton_Movie />
      ) : (
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movie.map((items) => {
            const { poster_path, original_name, id } = items;
            const title = original_name.substring(0, 20);
            return (
              <div className="p-4 my-5" key={id}>
                <Link href={`/movie/${id}`}>
                  <div className="w-full max-w-[450px] md:max-w-[300px] rounded-md border border-gray-500 mx-auto hover:scale-110 transition ease-in-out hover:shadow-2xl hover:shadow-red-500">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                      alt="Laptop"
                      className="h-[200px] w-full rounded-t-md object-cover "
                      priority
                      width={100}
                      height={100}
                    />
                    <div className="p-4">
                      <h1 className="flex justify-center items-center text-lg font-semibold">
                        {original_name.length > 20
                          ? `${title}...`
                          : `${original_name}`}
                        &nbsp;
                        <TbArrowUpRight className="h-4 w-4" />
                      </h1>
                      <div className="flex justify-center">
                        <button type="button" className="btn">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default MovieData;
