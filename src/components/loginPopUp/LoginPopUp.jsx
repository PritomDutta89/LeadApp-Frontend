/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "react-query";
import { useDataContext } from "../../context/DataContext";
import { loginApi, registerApi, resetPasswordApi } from "../../services/Api";
import { validatePassword } from "../../utilities/reusableFunction";
import ReCAPTCHA from "react-google-recaptcha";

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    userName: "",
    password: "",
  });
  const { setToken } = useDataContext();
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  // React query
  const logIn = useMutation(loginApi, {
    onSuccess: (data) => {
      setToken(data?.token);
      localStorage.setItem("tokenETL", data?.token);
      setShowLogin(false);

      data?.success
        ? toast.success("Login Successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        : toast.error(data?.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    },
    onError: () => {
      toast.error("Please try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });

  const signUp = useMutation(registerApi, {
    onSuccess: (data) => {
      setToken(data?.token);
      localStorage.setItem("tokenETL", data?.token);
      setShowLogin(false);

      data?.success
        ? toast.success("Register Successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        : toast.error(data?.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    },
    onError: () => {
      toast.error("Please try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });

  // reset password
  const resetPassword = useMutation(resetPasswordApi, {
    onSuccess: (data) => {
      // setShowLogin(false);

      data?.success
        ? toast.success("Password Reset Successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        : toast.error("User doesn't exist.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    },
    onError: () => {
      toast.error("Please try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });

  const onChangeHandler = (event) => {
    setData((prv) => ({ ...prv, [event.target.name]: event.target.value }));
  };

  const onCaptchaChange = (token) => {
    setRecaptchaToken(token); // Set the token received from reCAPTCHA
  };

  const onLogin = async (e) => {
    e.preventDefault();

    if (!validatePassword(data.password)) {
      toast.warn(
        "Password must contain at least 1 uppercase, 1 lowercase, 1 special character, 1 number, and be at least 7 characters long.",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      return;
    }

    if (!recaptchaToken && currState !== "Forgot") {
      toast.warn("Please complete the CAPTCHA", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (currState === "Login") {
      logIn.mutate({ ...data, recaptchaToken });
    } else if (currState === "Signin") {
      signUp.mutate({ ...data, recaptchaToken });
    } else if (currState === "Forgot") {
      resetPassword.mutate({ ...data, recaptchaToken });
    }
  };

  return (
    <>
      <div
        id="authentication-modal"
        tabIndex="-1"
        // aria-hidden="true"
        className="overflow-y-auto flex overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow  ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t  ">
              <h3 className="text-xl font-semibold text-gray-900  ">
                {currState !== "Forgot"
                  ? currState === "Login"
                    ? "Sign in to our platform"
                    : "Sign up to our platform"
                  : "Reset Password"}
              </h3>
              <button
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  "
                data-modal-hide="authentication-modal"
                onClick={() => setShowLogin(false)}
              >
                <svg
                  className="w-3 h-3"
                  //   aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5">
              {currState !== "Forgot" ? (
                <form className="space-y-4" onSubmit={onLogin}>
                  {currState !== "Login" && (
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900  "
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Your Name"
                        value={data.name}
                        onChange={onChangeHandler}
                        required
                      />
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="userName"
                      className="block mb-2 text-sm font-medium text-gray-900  "
                    >
                      Username
                    </label>
                    <input
                      type="userName"
                      name="userName"
                      id="userName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                      placeholder="Username"
                      value={data.userName}
                      onChange={onChangeHandler}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900  "
                    >
                      Your password (Minimum 7 character) <br />
                      <span className="text-gray-400 text-[0.7rem]">
                        [ Must use 1 uppercase, 1 lowercase, 1 special
                        character, 1 number ]
                      </span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="•••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                      value={data.password}
                      onChange={onChangeHandler}
                      required
                    />
                  </div>

                  {currState === "Login" && (
                    <div>
                      <p
                        onClick={() => setCurrState("Forgot")}
                        className="text-right text-xs cursor-pointer font-medium text-red-500 hover:underline"
                      >
                        Forgot password?
                      </p>
                    </div>
                  )}

                  {/* CAPTCHA */}
                  {currState === "Login" && (
                    <div>
                      <ReCAPTCHA
                        sitekey={import.meta.env.VITE_SITE_KEY}
                        onChange={onCaptchaChange}
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full text-white bg-red-500 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                  >
                    {currState === "Login" ? "Login" : "Create account"}
                  </button>
                  <div className="text-sm font-medium text-gray-500  ">
                    {currState === "Login"
                      ? "Not registered?"
                      : "Already have an account?"}
                    {currState === "Login" ? (
                      <a
                        href="#"
                        className="text-red-500 hover:underline "
                        onClick={() => setCurrState("Signin")}
                      >
                        Create account
                      </a>
                    ) : (
                      <a
                        href="#"
                        className="text-red-500 hover:underline "
                        onClick={() => setCurrState("Login")}
                      >
                        Login here
                      </a>
                    )}
                  </div>
                </form>
              ) : (
                <form className="space-y-4" onSubmit={onLogin}>
                  <div>
                    <label
                      htmlFor="userName"
                      className="block mb-2 text-sm font-medium text-gray-900  "
                    >
                      Username
                    </label>
                    <input
                      type="userName"
                      name="userName"
                      id="userName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                      placeholder="Username"
                      value={data.userName}
                      onChange={onChangeHandler}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900  "
                    >
                      New password (Minimum 7 character) <br />
                      <span className="text-gray-400 text-[0.7rem]">
                        [ Must use 1 uppercase, 1 lowercase, 1 special
                        character, 1 number ]
                      </span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="•••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                      value={data.password}
                      onChange={onChangeHandler}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-red-500 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                  >
                    Reset Password
                  </button>

                  <div className="" onClick={() => setCurrState("Login")}>
                    <p className="text-red-500 cursor-pointer font-medium text-right underline text-[0.9rem]">
                      Login
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPopUp;
