import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Auth = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  const toggleView = () => {
    setIsLoginView((prevView) => !prevView);
  };

  return (
    <>
      {isLoginView ? (
        <Login toggleView={toggleView} />
      ) : (
        <Signup toggleView={toggleView} />
      )}
    </>
  );
};

export default Auth;
