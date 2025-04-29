import {
  createBrowserRouter,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import { TemplateLayout } from "../layout/tamplate-layout/TamplateLayout";
import { Products } from "../page/Products/Products";
import Login from "../page/Login/Login";
import Cart from "../page/Cart/Cart";
import Summary from "../page/Summary/Summary";
import CheckoutInformation from "../page/CheckoutInformation/CheckoutInformation";

const AuthGuard = () => {
  const location = useLocation();

  const token = sessionStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

const AppRouters = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <AuthGuard />,
    children: [
      {
        path: "",
        element: (
          <TemplateLayout>
            <Outlet />
          </TemplateLayout>
        ),
        children: [
          { path: "", element: <Navigate to="/products" /> },
          { path: "products", element: <Products /> },
          { path: "cart", element: <Cart /> },
          { path: "summary", element: <Summary /> },
          { path: "checkout-information", element: <CheckoutInformation /> },
          { path: "checkout", element: <Cart /> },
        ],
      },
    ],
  },
]);

export default AppRouters;
