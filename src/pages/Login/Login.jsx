import React, { useEffect, useRef, useState } from "react";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
const Login = () => {
  const [disable, setDisable] = useState(true);
  const captchaRef = useRef(null);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;
    console.log(email, password, captcha);
  };

  // captcha validation
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
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
                type="text"
                ref={captchaRef}
                name="captcha"
                placeholder="type here"
                className="input input-bordered"
                required
              />
              <button
                onClick={handleValidateCaptcha}
                type="button"
                className="btn btn-xs btn-outline mt-2 "
              >
                validate captcha
              </button>
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
            <Link to="/register">
              <p className="text-center">New here? Create a New Account</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
