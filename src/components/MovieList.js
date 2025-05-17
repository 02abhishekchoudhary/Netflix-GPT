import { useRef } from "react";
import MovieCard from "./MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MovieList = ({ title, movies }) => {
  const scrollContainerRef = useRef(null);
  const SCROLL_AMOUNT = 300;

  const handleWheel = (e) => {
    if (scrollContainerRef.current) {
      e.preventDefault();
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  const scrollLeft = () => {
    scrollContainerRef.current.scrollLeft -= SCROLL_AMOUNT;
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollLeft += SCROLL_AMOUNT;
  };

  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6 relative">
      <h1 className="text-xl md:text-3xl py-4 text-white">{title}</h1>

      <div className="relative group">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hidden group-hover:block"
          onClick={scrollLeft}
        >
          <ChevronLeft size={28} />
        </button>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hidden group-hover:block"
          onClick={scrollRight}
        >
          <ChevronRight size={28} />
        </button>

        <div
          className="flex overflow-x-scroll hide-scrollbar"
          ref={scrollContainerRef}
          onWheel={handleWheel}
        >
          <div className="flex gap-2">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;

// import { useRef } from "react";
// import MovieCard from "./MovieCard";

// const MovieList = ({ title, movies }) => {
//   const scrollContainerRef = useRef(null);

//   const handleWheel = (e) => {
//     if (scrollContainerRef.current) {
//       e.preventDefault();
//       scrollContainerRef.current.scrollLeft += e.deltaY;
//     }
//   };
//   if (!movies || movies.length === 0) return null;

//   return (
//     <div className="px-6">
//       <h1 className="text-3xl py-4 text-white">{title}</h1>
//       <div
//         className="flex overflow-x-scroll hide-scrollbar"
//         ref={scrollContainerRef}
//         onWheel={handleWheel}
//       >
//         <div className="flex">
//           {movies?.map((movie) => (
//             <MovieCard key={movie.id} posterPath={movie.poster_path} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieList;
