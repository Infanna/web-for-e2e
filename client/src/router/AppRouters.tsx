import { createBrowserRouter } from "react-router-dom";
import { TemplateLayout } from "../layout/tamplate-layout/TamplateLayout";
import { Products } from "../page/Products/Products";
import Login from "../page/Login/Login";
import CartPage from "../page/Cart/CartPage";
import Summary from "../page/Summary/Summary";
import CheckoutInformation from "../page/CheckoutInformation/CheckoutInformation";

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
    path: "/products",
    element: <TemplateLayout children={<Products />} />,
  },
  {
    path: "/cart",
    element: <TemplateLayout children={<CartPage />} />,
  },
  {
    path: "/summary",
    element: <Summary />,
  },
  {
    path: "/checkout-information",
    element: <TemplateLayout children={<CheckoutInformation />} />,
  },
]);

export default AppRouters;
