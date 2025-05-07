const GptSearchBar = () => {
  return (
    <div className="pt-[5%] flex justify-center">
      <form className="w-1/2 bg-red-400 grid grid-cols-12 rounded-md">
        <input
          type="text"
          placeholder="What would you like to watch today?"
          className="p-4 m-4 col-span-9"
        />
        <button className="bg-red-700 text-white rounded-lg m-4 px-4 py-2 col-span-3 text-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
