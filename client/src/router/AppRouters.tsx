import { createBrowserRouter } from "react-router-dom";
import { Login } from "../page/Login/Login";

const AppRouters = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default AppRouters;
