const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/5">{overview}</p>
      <button className="text-white bg-gray-500 text-xl px-12 p-4 rounded-lg opacity-50">
        ▶️ Play
      </button>
      <button className="text-white bg-gray-500 text-xl px-12 p-4 rounded-lg opacity-50 mx-2">
        ℹ️ More Info
      </button>
    </div>
  );
};

export default VideoTitle;
