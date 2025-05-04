import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-80 pl-12 relative z-20 ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      </div>
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
    </div>
  );
};

export default SecondaryContainer;
