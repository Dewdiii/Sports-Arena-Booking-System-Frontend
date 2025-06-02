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
      <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
        <div
          className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${background})`,
            width: "480px",
          }}
        >
          <div className="flex flex-col items-center justify-center h-full p-8">
            <div className="flex items-center p-4">
              <img src={logo} alt="Arena Logo" className="h-7 w-auto mr-0" />
              <img src={arena} alt="Arena" className="h-7 w-auto mr-2" />
              <div className="h-8 border-l border-white mx-2"></div>
              <h2 className="text-white text-sm">Area Owner Dashboard</h2>
            </div>

            <br />
            <br />
            <h1 className="text-white text-3xl font-bold ">MANAGE GROUNDS</h1>
            <br />

            <h2 className="text-lime-400 text-3xl font-bold ">EASILY</h2>
          </div>
        </div>
        <div
          className="w-full lg:w-1/2 py-16 px-12 "
          style={{ width: "430px" }}
        >
          <h2 className="text-3xl mb-4 text-center font-bold">Welcome Back!</h2>
          <p className="mb-4 text-center">Please enter your details.</p>
          <form className="space-y-6 " onSubmit={onSubmit}>
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
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
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800"
              >
                Sign in
              </button>
            </div>
            <div>
              <button
                type="button"
                className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <svg
                  className="h-5 w-5 mr-2"
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
            <p className="text-sm text-gray-600 text-center">
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
