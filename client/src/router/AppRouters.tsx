import { createBrowserRouter } from "react-router-dom";
import { TemplateLayout } from "../layout/tamplate-layout/TamplateLayout";
import { Products } from "../page/Products/Products";
import Login from "../page/Login/Login";
import { CartPage } from "../page/Cart/CartPage";

const AppRouters = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/products",
    element: <TemplateLayout children={<Products />} />,
  },
  {
    path: "/cart",
    element: <TemplateLayout children={<CartPage />} />,
  },
]);

export default AppRouters;
