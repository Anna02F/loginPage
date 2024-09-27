import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import HomePage from "../pages/HomePage/HomePage";
import ProtectedRoutes from "./ProtectedRoutes";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
]);
