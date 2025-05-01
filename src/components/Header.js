import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { DEFAULT_USER_AVATAR, LOGO_URL } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen z-10 px-8 py-2 flex justify-between">
      <img className="w-44 " src={LOGO_URL} alt="Netflix Logo" />
      {user && (
        <div className="flex p-2 items-center gap-4">
          <img
            className="w-12 h-12 rounded-md"
            src={user?.photoURL || { DEFAULT_USER_AVATAR }}
            alt="Usericon"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-red-500 hover:text-red-700 transition duration-200"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
