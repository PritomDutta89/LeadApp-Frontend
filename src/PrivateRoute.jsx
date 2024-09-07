import { Navigate } from "react-router-dom";
import { useDataContext } from "./context/DataContext";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ element: Component, ...rest }) => {
  const { token } = useDataContext();

  useEffect(() => {
    !token && toast.error("Please login.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }, [token]);

  if (!token) {
    return <Navigate to="/" />;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
