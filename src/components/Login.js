import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value
      // name.current.value
    );
    setErrMessage(message);
    if (message) return;

    // Sign In / Sign Up
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://images.freeimages.com/fic/images/icons/1275/naruto_vol_1/256/uzumaki_naruto.png",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrMessage(error);
            });

          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
  };

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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 p-12 bg-black bg-opacity-70 rounded-lg"
        >
          <h1 className="text-white text-2xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 m-2 w-full rounded bg-gray-700 text-white placeholder-gray-400"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email address"
            className="p-2 m-2 w-full rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 m-2 w-full rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <p className="text-red-500 text-lg px-2  py-2">{errMessage}</p>
          <button
            className="p-2 mx-2 my-6 w-full bg-red-600 text-white rounded hover:bg-red-700"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white text-sm">
            {isSignInForm ? "Already Registered? " : "New To Netflix?"}
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
