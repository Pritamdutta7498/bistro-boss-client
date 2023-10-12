import React, { useContext } from "react";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const {} = useContext(AuthContext);

  return (
    <div
      style={{ backgroundImage: `url(${loginBg})` }}
      className="w-full bg-cover h-[768px] flex items-center justify-center "
    >
      <div className=" p-20 flex md:flex-row justify-center items-center gap-10 shadow-2xl rounded-md">
        {/* form */}
        <div className="card flex-shrink-0 w-full h-fit max-w-sm  ">
          <h2 className="text-center font-semibold text-4xl font-serif">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="name"
                className="input input-bordered"
              />
              {errors?.name?.type === "required" && (
                <p className="text-red-600">
                  *Name is required!
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors?.email?.type === "required" && (
                <p className="text-red-600">
                  *Email is required!
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i,
                })}
                placeholder="password must be at least 6 characters"
                className="input input-bordered"
              />
              {errors?.password?.type === "required" && (
                <p className="text-red-600">
                  *Password is required!
                </p>
              )}
              {errors?.password?.type === "minLength" && (
                <p className="text-red-600">
                  password must be at least 6 characters!
                </p>
              )}
              {errors?.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must contain at least one letter, one number, and one
                  special character!
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <input className="btn bg-[#e1a345b2] " type="submit" />
            </div>

            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold hover:text-blue-500">
                Login
              </Link>
            </p>
          </form>
        </div>
        <div>
          <img src={loginImg} alt="loginImg" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
