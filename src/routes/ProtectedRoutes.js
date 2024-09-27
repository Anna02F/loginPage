import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

const ProtectedRoutes = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
