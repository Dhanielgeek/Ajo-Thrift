import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/index";
import Home from "../Pages/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Welcome from "../Components/Welcome";

export const MainRoutes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "reg",
    element: <Register />,
  },
  {
    path: "welcome",
    element: <Welcome />,
  },
]);
