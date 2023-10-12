import React, { useContext, useEffect, useState } from "react";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
const Login = () => {
  const [disable, setDisable] = useState(true);
  // navigate the routes under private with location
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password, captcha);

    // signIn user
    signIn(email, password).then((result) => {
      const user = result.user;
      // console.log(user);
      Swal.fire("Success!", "User Login successfully!", "success");
      navigate(from, { replace: true });
    });
  };

  // captcha validation
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value) == true) {
      // alert('Captcha Matched');
      setDisable(false);
    } else {
      setDisable(true);

      alert("Captcha Does Not Match");
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div
        style={{ backgroundImage: `url(${loginBg})` }}
        className="w-full bg-cover h-[768px] flex items-center justify-center "
      >
        <div className=" p-20 flex md:flex-row justify-center items-center gap-10 shadow-2xl rounded-md">
          <div>
            <img src={loginImg} alt="loginImg" />
          </div>
          {/* form */}

          <div className="card flex-shrink-0 w-full h-fit max-w-sm  ">
            <h2 className="text-center font-semibold text-4xl font-serif">
              Login
            </h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* for captcha */}
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="type here"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button
                  disabled={disable}
                  className="btn bg-[#e1a345b2] "
                  type="submit"
                >
                  Login
                </button>
              </div>

              <p className="text-center">
                New here?{" "}
                <Link
                  to="/signup"
                  className="font-semibold hover:text-blue-500"
                >
                  Create a New Account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
