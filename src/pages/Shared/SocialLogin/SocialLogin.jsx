import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);

      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      }
      
      console.log(saveUser);
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(saveUser),
      
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <div className="divider text-xl"></div>
      <div className="w-full text-center">
        <button onClick={handleGoogleSignIn} className="btn btn-circle">
          <FcGoogle className="text-4xl" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
