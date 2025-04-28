import { IoCartSharp } from "react-icons/io5";
import { useNavigateToPage } from "../../utils/navigate/navigate";
import odtLogo from "../../assets/images/ODT_Logo.png";
export const NavBarComponent = () => {
  const navigateToPage = useNavigateToPage();
  const goToCart = () => {
    navigateToPage("/cart");
  };

  return (
    <div className="d-flex justify-content-between align-items-center p-3 w-full border-bottom">
      <a href="/login" data-testid="logout">
        Logout
      </a>
      <img
        src={odtLogo}
        alt="odt-logo"
        className="img-fluid"
        style={{ width: "75px", height: "auto" }}
      />
      <IoCartSharp
        data-testid="icon-cart"
        className="fs-4"
        onClick={goToCart}
      />
    </div>
  );
};
