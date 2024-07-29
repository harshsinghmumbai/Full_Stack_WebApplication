import MovieData from "@/components/MovieData";

const movie = () => {
  return (
    <>
      <h1 className="text-center capitalize mt-4 text-xl md:text-2xl text-blue-600 font-semibold font-serif tracking-wider">
        Popular T.V shows in Worldwide
      </h1>
      <MovieData />
    </>
  );
};

export default movie;
