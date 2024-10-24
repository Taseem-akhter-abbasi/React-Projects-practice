import React, { useState, useRef, useEffect } from "react";
import Signin from "./Singnin";
import Login from "./Login";

const LoginPopup = ({ loginPopup, handleLoginPopup }) => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  const loginPopupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (loginPopupRef.current && e.target === loginPopupRef.current) {
        handleLoginPopup(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [handleLoginPopup]);

  const bgImage = {
    width: "100%",
    height: "100%",
    backgroundImage: "url(https://picsum.photos/300/300)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      {loginPopup && (
        <div
          ref={loginPopupRef}
          className="fixed top-0 left-0 w-full h-full z-50 overflow-y-auto"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-md w-[90%] sm:w-auto mx-auto bg-white">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center sm:w-[600px] md:w-[700px] relative">
                {showSignIn ? (
                  <Signin handleSignIn={handleSignIn} />
                ) : (
                  <Login handleSignIn={handleSignIn} />
                )}
                <div
                  className="hidden sm:block rounded-e-2xl sm:h-[450px]"
                  style={bgImage}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPopup;
