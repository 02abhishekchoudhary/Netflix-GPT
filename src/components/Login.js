import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative  h-screen w-screen">
      <Header />
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web_tall_panel/IN-en-20250407-TRIFECTA-perspective_8be2cd93-f2e6-4e34-acba-05b716385704_large.jpg"
        alt="Background Image"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
        <form className="w-3/12 p-12 bg-black bg-opacity-70 rounded-lg">
          <h1 className="text-white text-2xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 m-2 w-full rounded bg-gray-700 text-white placeholder-gray-400"
            />
          )}
          <input
            type="email"
            placeholder="Email address"
            className="p-2 m-2 w-full rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <input
            type="password"
            placeholder="password"
            className="p-2 m-2 w-full rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <button className="p-2 mx-2 my-6 w-full bg-red-600 text-white rounded hover:bg-red-700">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white text-sm">
            {isSignInForm ? "Already registered? " : "New To Netflix?"}
            <span
              className="cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign Up Now" : " Sign In Now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
