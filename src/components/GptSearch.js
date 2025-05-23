import { BG_URL } from "../utils/constants";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div>
        <img
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
          src={BG_URL}
          alt="Background Image"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMoviesSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
