import React from "react";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EditUsers from "./pages/EditUsers";
import CreateUser from "./pages/CreateUser";
import EditProduct from "./pages/EditProduct";
import CreateProduct from "./pages/CreateProduct";
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
    path: "/users/:id",
    element: <EditUsers />,
  },
  {
    path: "/users/new",
    element: <CreateUser />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/new",
    element: <CreateProduct />,
  },
  {
    path: "/products/:id",
    element: <EditProduct />,
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
