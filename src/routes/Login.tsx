import { useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { loginRequest } from "../services/authRequests";
import { useAppSelector } from "../store/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import Spinner from "../components/Common/Spinner";
import LoginFormInterface from "../types/LoginFormInterface";
import { Link } from "react-router-dom";

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
    "w-full px-4 py-3 rounded-lg bg-gray-200 disabled:bg-gray-200 mt-2 border-2 focus:border-blue-500 focus:bg-white focus:outline-none";
  const inputErrClassName =
    "w-full px-4 py-3 rounded-lg bg-gray-200 disabled:bg-gray-200 mt-2 border-2 focus:border-blue-500 focus:bg-white focus:outline-none border-red-500 focus:border-red-500";

  return user ? (
    <Navigate to={from} replace />
  ) : (
    <section className="flex">
      <div className="p-4 md:p-8 grow min-h-screen">
        <a
          href="https://github.com/AhmedHossam01/bug-tracker-client"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        <h1 className="text-xl md:text-4xl font-bold leading-tight md:mt-12 text-slate-700">
          Login
        </h1>

        <form className="mt-6 md:mt-12" onSubmit={handleSubmit(onSubmit)}>
          {error && (
            <div className="alert alert-error mb-4" role="alert">
              <div className="flex-1">
                <ExclamationCircleIcon className="w-6 h-6 mr-2" />
                <p>{error}</p>
              </div>
            </div>
          )}

          <div>
            <label className="block text-gray-700" htmlFor="email">
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
              disabled={isLoading}
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
            <label className="block text-gray-700" htmlFor="password">
              Password
            </label>

            <input
              {...register("password", {
                required: "Please enter a password.",
              })}
              disabled={isLoading}
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

          {isLoading && (
            <div className="alert alert-warning mt-4 text-yellow-600">
              Might take longer than expected if the server is still starting
              up...
            </div>
          )}
        </form>

        <hr className="my-6 border-gray-300 w-full" />

        <p className="text-center">
          Need an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Create an account
          </Link>
        </p>

        <div className="bg-blue-100 px-4 py-2 rounded-lg mt-3 text-blue-600">
          <p className="text-blue-400 text-sm">Or use these credentials 🙃</p>
          <p className="mt-1">
            📧 <b>demo@gmail.com</b>
          </p>
          <p>
            🔑 <b>123456</b>
          </p>
        </div>
      </div>

      <div className="overflow-hidden hidden md:block md:w-1/2 xl:w-3/5 self-stretch">
        <img
          src="./screenshot.png"
          alt="screenshot"
          className="skew-y-6 scale-y-125 w-full h-full object-cover object-right bg-indigo-100"
        />
      </div>
    </section>
  );
};

export default Login;
