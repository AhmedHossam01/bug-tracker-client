import Input from "../components/Form/Input";
import { useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { loginRequest, validateEmail } from "../services/authRequests";
import { useAppSelector } from "../store/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import Spinner from "../components/Common/Spinner";
import LoginFormInterface from "../types/LoginFormInterface";
import { useState } from "react";

const Login = () => {
  const location = useLocation();
  // @ts-ignore
  const from = location.state?.from?.pathname || "/dashboard";
  const dispatch = useDispatch();

  const { isLoading, error, user } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInterface>({
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<LoginFormInterface> = ({ email, password }) => {
    loginRequest({ email, password }, dispatch);
  };

  const inputClassName =
    "w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border-2 focus:border-blue-500 focus:bg-white focus:outline-none";
  const inputErrClassName =
    "w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border-2 focus:border-blue-500 focus:bg-white focus:outline-none border-red-500 focus:border-red-500";

  return user ? (
    <Navigate to={from} replace />
  ) : (
    <section className="flex min-h-screen">
      <div className="p-8 grow">
        <h1 className="text-xl md:text-4xl font-bold leading-tight md:mt-12 text-slate-700">
          Sign in to your account
        </h1>

        <form className="mt-6 md:mt-12" onSubmit={handleSubmit(onSubmit)}>
          {error && (
            <div className="alert alert-error mb-4" role="alert">
              <div className="flex-1">
                <ExclamationCircleIcon className="w-6 h-6 mr-2" />
                <label>{error}</label>
              </div>
            </div>
          )}

          <div>
            <label className="block text-gray-700" htmlFor={"email"}>
              Email Address
            </label>

            <input
              {...register("email", {
                required: "Please enter an email.",
                validate: {
                  emailVlid: (value) =>
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ||
                    "Please use a valid email",
                },
              })}
              type="email"
              name="email"
              id="email"
              placeholder="john@gmail.com"
              className={errors.email ? inputErrClassName : inputClassName}
            />

            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="mt-6">
            <label className="block text-gray-700" htmlFor={"email"}>
              Password
            </label>

            <input
              {...register("password", {
                required: "Please enter a password.",
              })}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className={errors.password ? inputErrClassName : inputClassName}
            />

            {errors.password && (
              <p className="text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="flex items-center justify-center w-full bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 disabled:bg-indigo-100"
          >
            {isLoading ? <Spinner /> : "Sign in"}
          </button>
        </form>

        <hr className="my-6 border-gray-300 w-full" />

        <p className="text-center">
          Need an account?{" "}
          <a
            href="/"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Create an account
          </a>
        </p>
      </div>

      <div className="hidden md:block md:w-1/2 xl:w-3/5 self-stretch">
        <img
          src="https://source.unsplash.com/random"
          alt="screenshot"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Login;
