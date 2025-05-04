import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollContainerRef = useRef(null);

  const handleWheel = (e) => {
    if (scrollContainerRef.current) {
      e.preventDefault();
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div
        className="flex overflow-x-scroll hide-scrollbar"
        ref={scrollContainerRef}
        onWheel={handleWheel}
      >
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
