const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/5">{overview}</p>
      <button className="bg-white text-black text-xl px-12 p-4 rounded-lg hover:bg-opacity-80">
        ▶️ Play
      </button>
      <button className="text-white bg-gray-500 text-xl px-12 p-4 rounded-lg opacity-50 mx-2 hover:bg-opacity-80">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
