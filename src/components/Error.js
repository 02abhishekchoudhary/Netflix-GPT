import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white px-6">
      <img
        className="w-48 mb-8"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />
      <h1 className="text-6xl font-extrabold text-red-600 drop-shadow-lg mb-4">
        404
      </h1>
      <p className="text-xl mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/">
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded transition duration-300">
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
