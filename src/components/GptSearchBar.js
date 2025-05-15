import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import Openai from "../utils/openai";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // const handleGptSearchClick = async () => {
  //   console.log(searchText.current.value);
  //   const gptQuery =
  //     "Act as a movie Recommendation system and suggest some movies for the query : " +
  //     searchText.current.value +
  //     ". Only give me names of 5 movies. Comma seperated like the example results given ahead. Example result: Gadar, Dhol, Sholay, Don, Gangs Of Wasseypur";
  //   try {
  //     const gptResults = await Openai.chat.completions.create({
  //       model: "gpt-3.5-turbo",
  //       messages: [{ role: "user", content: gptQuery }],
  //     });
  //     console.log(gptResults);
  //     console.log(gptResults.choices);
  //   } catch (error) {
  //     console.error("OpenAI API error:", error.message);
  //   }
  // };

  // Replace with your Gemini API key
  const API_KEY = process.env.REACT_APP_GEMINI_KEY;

  const genAI = new GoogleGenerativeAI(API_KEY);

  const handleGptSearchClick = async () => {
    const query = searchText.current.value;
    console.log(query);

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      query +
      ". Only give me names of 5 movies. Comma separated like the example: Gadar, Dhol, Sholay, Don, Gangs Of Wasseypur.";

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // or use "gemini-pro"
      const result = await model.generateContent(gptQuery);
      const response = result.response;
      const text = await response.text();

      console.log(text);
    } catch (error) {
      console.error("Gemini API error:", error.message);
    }
  };

  return (
    <div className="pt-[5%] flex justify-center">
      <form
        className="w-1/2 bg-red-400 grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        />
        <button
          className="bg-red-700 text-white rounded-lg m-4 px-4 py-2 col-span-3 text-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
