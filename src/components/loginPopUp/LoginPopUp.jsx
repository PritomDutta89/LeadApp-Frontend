/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// import { LoginApi, RegisterApi } from "../../services/Api";
// import { useDataContext } from "../../context/DataContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "react-query";

const LoginPopUp = (setShowLogin) => {
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
//   const { setToken } = useDataContext();

  // React query
  //   const logIn = useMutation(LoginApi, {
  //     onSuccess: (data) => {
  //       setToken(data.data.token);
  //       localStorage.setItem("token", data.data.token);
  //       setShowLogin(false);

  //       toast.success("Login Successfully!", {
  //         position: "top-center",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     },
  //     onError: () => {
  //       toast.error("Please try again.", {
  //         position: "top-center",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     },
  //   });

  //   const signUp = useMutation(RegisterApi, {
  //     onSuccess: (data) => {
  //       setToken(data.data.token);
  //       localStorage.setItem("token: ", data.data.token);
  //       setShowLogin(false);

  //       toast.success("Register Successfully!", {
  //         position: "top-center",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     },
  //     onError: () => {
  //       toast.error("Please try again.", {
  //         position: "top-center",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     },
  //   });

  const onChangeHandler = (event) => {
    setData((prv) => ({ ...prv, [event.target.name]: event.target.value }));
  };

  //   const onLogin = async (e) => {
  //     e.preventDefault();

  //     if (currState === "Login") {
  //       logIn.mutate(data);
  //     } else if (currState === "Signin") {
  //       signUp.mutate(data);
  //     }
  //   };

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
                {currState === "Login"
                  ? "Sign in to our platform"
                  : "Sign up to our platform"}
              </h3>
              <button
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  "
                data-modal-hide="authentication-modal"
                // onClick={() => setShowLogin(false)}
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
              <form
                className="space-y-4"
                //   onSubmit={onLogin}
              >
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
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900  "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                    placeholder="name@company.com"
                    value={data.email}
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900  "
                  >
                    Your password (Minimum 8 character)
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPopUp;
