import { IoCartSharp } from "react-icons/io5";
import { useNavigateToPage } from "../../utils/navigate/navigate";
import odtLogo from "../../assets/images/ODT_Logo.png";
import { useCart } from "../cart-provider/CartProvider";

export const NavBarComponent = () => {
  const navigateToPage = useNavigateToPage();
  const { cartItems } = useCart();
  const goToCart = () => {
    navigateToPage("/cart");
  };

  const clearSessionStorage = () => {
    const loginInfo = localStorage.getItem("login");
    localStorage.clear();
    localStorage.setItem("login", loginInfo ?? "");
  };

  return (
    <div className="d-flex justify-content-between align-items-center p-3 w-full border-bottom">
      <a
        href="/login"
        data-testid="logout"
        className="text-decoration-none text-dark border border-primary p-2 rounded-pill"
        style={{ cursor: "pointer" }}
        onClick={clearSessionStorage}
      >
        Logout
      </a>
      <img
        src={odtLogo}
        data-testid="odt-logo"
        alt="odt-logo"
        className="img-fluid"
        style={{ width: "75px", height: "auto" }}
      />
      <div className="position-relative" style={{ cursor: "pointer" }}>
        <IoCartSharp
          data-testid="icon-cart"
          className="fs-2"
          onClick={goToCart}
        />
        {cartItems > 0 && (
          <div
            data-testid="count-cart"
            className="d-flex justify-content-between align-items-center p-1 position-absolute bg-primary text-white top-0 start-100 translate-middle rounded-circle fs-8"
            style={{ width: "16px", height: "16px" }}
          >
            {cartItems}
          </div>
        )}
      </div>
    </div>
  );
};
