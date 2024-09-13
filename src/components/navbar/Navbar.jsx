/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { useDataContext } from "../../context/DataContext";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../../redux/slice/tokenSlice";

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();
  // const { token } = useDataContext();
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    // localStorage.removeItem("tokenETL");
    // setToken("");
    dispatch(clearToken())
    navigate("/");
    toast.success("Logout Successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setShowLogin(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-10 border-gray-200 bg-gray-50   ">
        <div className=" mx-5 flex flex-wrap items-center justify-between p-4">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="cursor-pointer"
          >
            <p className="text-black font-bold text-[1.7rem]">
              <span className="text-[#5F5E61]">ETL</span>
              <span className="text-[#8C6BF9]">HIVE</span>
            </p>
          </div>

          <div className="flex items-center justify-center">
            {!token ? (
              <button
                type="button"
                className="mr-3 text-gray-800 border border-[#6947BF] hover:bg-[#f5f4fa] transition duration-0.3  font-medium rounded-full text-xs px-3 md:px-6 py-1 md:py-2.5  text-center  "
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
            ) : (
              <button
                type="button"
                className="mr-3 text-gray-800 border border-[#6947BF] hover:bg-[#f5f4fa] transition duration-0.3  font-medium rounded-full text-xs px-3 md:px-6 py-1 md:py-2.5  text-center  "
                onClick={() => {
                  handleLogout();
                }}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
