import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { userContext } from "../../App";

const PrivateRoute = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const location = useLocation();
  return loggedInUser.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
