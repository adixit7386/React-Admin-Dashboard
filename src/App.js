import React from "react";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
