import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";
import PersentageLoading from "../Components/Loaders/PersentageLoading";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  console.log(user);
  const location = useLocation();

  if (loading) {
    return <PersentageLoading />;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/authlayout/login"></Navigate>;
};

export default PrivetRoutes;
