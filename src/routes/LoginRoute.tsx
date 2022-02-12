import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginRequest } from "../services/authRequests";
import { useAppSelector } from "../store/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import Spinner from "../components/Common/Spinner";

const LoginRoute = () => {
  const dispatch = useDispatch();

  const { isLoading, error, user } = useAppSelector((state) => state.auth);

  interface Inputs {
    identifier: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = ({ identifier, password }) => {
    loginRequest({ identifier, password }, dispatch);
  };

  return user ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <section>
      <div className="flex min-h-screen overflow-hidden">
        <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="w-full max-w-xl mx-auto lg:w-96">
            <div>
              <a href="/" className="text-blue-600 text-medium">
                Bug Tracker
              </a>
              <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
                Sign in.
              </h2>
            </div>

            {error && (
              <div className="alert alert-error mt-8">
                <div className="flex-1">
                  <ExclamationCircleIcon className="w-6 h-6 mr-2" />
                  <label>{error}</label>
                </div>
              </div>
            )}

            <div className="mt-8">
              <div className="mt-6">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      Email or Username
                    </label>
                    <div className="mt-1">
                      <input
                        {...register("identifier", { required: true })}
                        id="identifier"
                        name="identifier"
                        type="text"
                        autoComplete="email"
                        placeholder="Your Email address or Username"
                        className={`${
                          errors.identifier &&
                          "border-red-500 border-1 focus:border-red-500 focus:ring-red-500 border-1 placeholder:text-red-300 animate-pulse"
                        } block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300`}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        {...register("password", { required: true })}
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Your Password"
                        className={`${
                          errors.password &&
                          "border-red-500 border-1 focus:border-red-500 focus:ring-red-500 border-1 placeholder:text-red-300 animate-pulse"
                        } block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300`}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-50"
                      />
                      <label
                        htmlFor="remember-me"
                        className="block ml-2 text-sm text-neutral-600"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a
                        href="/"
                        className="font-medium text-blue-600 hover:text-blue-500"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <div>
                    <button
                      disabled={isLoading}
                      className="disabled:bg-gray-300 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      {isLoading ? <Spinner /> : "Sign in"}
                    </button>
                  </div>
                </form>
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-neutral-600">Or</span>
                  </div>
                </div>
                <div>
                  <button className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-xl rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <div className="flex items-center justify-center">
                      Create an account
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1 hidden w-0 overflow-hidden lg:block">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src="https://d33wubrfki0l68.cloudfront.net/1a058aec6e3d81efe3ac4ca6366b40574876f6bc/32bc1/images/placeholders/rectanglewide.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default LoginRoute;
