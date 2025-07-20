import { Link, useNavigate } from "react-router-dom";
import background from "../assets/Background Image.png";
import logo from "../assets/logo.png";
import arena from "../assets/Arena.png";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
export type SignInFormData = {
  email: string;
  password: string;
};
const LoginPage = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({ message: "Sign In Sucessful", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
      //show the toast
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });
  return (
    <div className="container mx-auto">
      <div className="mx-auto flex w-10/12 flex-col overflow-hidden rounded-xl bg-white shadow-lg lg:w-8/12 lg:flex-row">
        <div
          className="flex w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-12 lg:w-1/2"
          style={{
            backgroundImage: `url(${background})`,
            width: "480px",
          }}
        >
          <div className="flex h-full flex-col items-center justify-center p-8">
            <div className="flex items-center p-4">
              <img src={logo} alt="Arena Logo" className="mr-0 h-7 w-auto" />
              <img src={arena} alt="Arena" className="mr-2 h-7 w-auto" />
              <div className="mx-2 h-8 border-l border-white"></div>
              <h2 className="text-sm text-white">Area Owner Dashboard</h2>
            </div>

            <br />
            <br />
            <h1 className="text-3xl font-bold text-white">MANAGE GROUNDS</h1>
            <br />

            <h2 className="text-3xl font-bold text-lime-400">EASILY</h2>
          </div>
        </div>
        <div
          className="w-full px-12 py-16 lg:w-1/2"
          style={{ width: "430px" }}
        >
          <h2 className="mb-4 text-center text-3xl font-bold">Welcome Back!</h2>
          <p className="mb-4 text-center">Please enter your details.</p>
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                {...register("email", { required: "This field is required" })}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-green-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
            <div>
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#4285F4"
                    d="M24 9.5c3.9 0 7.1 1.4 9.6 3.7l7.1-7.1C36.7 2.7 30.8 0 24 0 14.8 0 6.9 5.1 2.7 12.6l8.7 6.8C13.1 13.6 18 9.5 24 9.5z"
                  />
                  <path
                    fill="#34A853"
                    d="M46.5 24.1c0-1.3-.1-2.5-.3-3.7H24v7.4h12.7c-.6 3.5-2.7 6.5-5.7 8.5l8.7 6.8c5.1-4.7 8-11.6 8-19.6z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M12.7 27.2c-1.3-3.8-1.3-7.8 0-11.6l-8.7-6.8C1.4 13 0 18.3 0 24s1.4 11 3.9 15.2l8.7-6.8z"
                  />
                  <path
                    fill="#EA4335"
                    d="M24 48c6.5 0 12-2.1 16.1-5.7l-8.7-6.8c-2.3 1.6-5.3 2.5-8.4 2.5-6 0-11.1-4-12.9-9.4L3.9 39.2C7.9 45.2 15.3 48 24 48z"
                  />
                  <path fill="none" d="M0 0h48v48H0z" />
                </svg>
                Sign in with Google
              </button>
            </div>
          </form>
          <div className="mt-6">
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/registertype"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
