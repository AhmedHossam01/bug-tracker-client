import { useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { signupRequest, validateEmail } from "../services/authRequests";
import { useAppSelector } from "../store/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import Spinner from "../components/Common/Spinner";
import LoginFormInterface from "../types/LoginFormInterface";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const location = useLocation();
  // @ts-ignore
  const from = location.state?.from?.pathname || "/dashboard";
  const dispatch = useDispatch();

  const { isLoading, user } = useAppSelector((state) => state.auth);
  const [isValidating, setIsValidating] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormInterface>({
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<LoginFormInterface> = ({ email, password }) => {
    signupRequest({ email, password }, dispatch);
  };

  const inputClassName =
    "mb-1 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border-2 focus:border-blue-500 focus:bg-white focus:outline-none";
  const inputErrClassName =
    "mb-1 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border-2 focus:border-blue-500 focus:bg-white focus:outline-none border-red-500 focus:border-red-500";

  return user ? (
    <Navigate to={from} replace />
  ) : (
    <section className="flex">
      <div className="hidden md:block md:w-1/3 xl:w-3/5 self-stretch overflow-hidden">
        <img
          src="./screenshot.png"
          alt="screenshot"
          className="skew-y-6 scale-y-125 w-full h-full object-cover object-right bg-indigo-100"
        />
      </div>

      <div className="p-8 grow min-h-screen">
        <h1 className="text-xl md:text-4xl font-bold leading-tight md:mt-12 text-slate-700">
          Create a new account
        </h1>

        <form className="mt-6 md:mt-12" onSubmit={handleSubmit(onSubmit)}>
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
                  emailExist: async (value) => {
                    setIsValidating(true);
                    const val =
                      (await validateEmail(value)) || "Email already exists";
                    setIsValidating(false);

                    return val;
                  },
                },
              })}
              type="email"
              name="email"
              id="email"
              placeholder="john@gmail.com"
              className={errors.email ? inputErrClassName : inputClassName}
            />

            {isValidating && <p className="text-slate-600">Validating...</p>}

            {watch("email") && !errors.email && !isValidating && (
              <p className="text-green-500">You can use this email!</p>
            )}

            {errors.email && !isValidating && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="mt-6">
            <label className="block text-gray-700" htmlFor={"email"}>
              Password (Encrypted 👌)
            </label>

            <input
              {...register("password", {
                required: "Please enter a password.",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long.",
                },
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
            {isLoading ? <Spinner /> : "Register"}
          </button>

          {isLoading && (
            <div className="alert alert-info mt-4">
              Might take longer than expected if the server is still starting
              up...
            </div>
          )}
        </form>

        <hr className="my-6 border-gray-300 w-full" />

        <p className="text-center">
          Alreaddy have an account?{" "}
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
