import { createBrowserRouter, Navigate } from "react-router-dom";
import { TemplateLayout } from "../layout/tamplate-layout/TamplateLayout";
import { Products } from "../page/Products/Products";
import Login from "../page/Login/Login";
import Cart from "../page/Cart/Cart";
import Summary from "../page/Summary/Summary";
import CheckoutInformation from "../page/CheckoutInformation/CheckoutInformation";
import { JSX } from "react";

const AuthGuard = ({ children }: { children: JSX.Element }) => {
  return children;
  // const token = sessionStorage.getItem("token");

  // return !token ? <Login /> : children;
};

const AppRouters = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/products" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/products",
    element: (
      <AuthGuard>
        <TemplateLayout>
          <Products />
        </TemplateLayout>
      </AuthGuard>
    ),
  },
  {
    path: "/cart",
    element: (
      <AuthGuard>
        <TemplateLayout>
          <Cart />
        </TemplateLayout>
      </AuthGuard>
    ),
  },
  {
    path: "/checkout",
    element: <TemplateLayout children={<Cart />} />,
  },
  {
    path: "/summary",
    element: (
      <AuthGuard>
        <TemplateLayout>
          <Summary />,
        </TemplateLayout>
      </AuthGuard>
    ),
  },
  {
    path: "/checkout-information",
    element: (
      <AuthGuard>
        <TemplateLayout>
          <CheckoutInformation />
        </TemplateLayout>
      </AuthGuard>
    ),
  },
]);

export default AppRouters;
