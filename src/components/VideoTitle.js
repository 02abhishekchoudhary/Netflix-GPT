const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:block py-6 text-lg w-1/5">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white text-black text-xl md:px-12 md:py-4 px-2 py-2 rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="text-white bg-gray-500 text-xl px-12 p-4 rounded-lg opacity-50 mx-2 hover:bg-opacity-80 hidden md:inline-block">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
