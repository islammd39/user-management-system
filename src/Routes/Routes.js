import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
  {
    path:'/', element:<Login></Login>,
  },
  {
    path:'/', element:<ErrorPage></ErrorPage>
  },
  {
    path:'/register', element:<Register></Register>
  }
])