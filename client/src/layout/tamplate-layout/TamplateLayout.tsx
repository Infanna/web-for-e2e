import { CartProvider } from "../../components/cart-provider/CartProvider";
import { NavBarComponent } from "../../components/nav-bar/NavBarComponent";

type TemplateLayoutProps = {};

export const TemplateLayout: React.FC<
  React.PropsWithChildren<TemplateLayoutProps>
> = ({ children, ...props }) => {
  return (
    <div>
      <CartProvider>
        <NavBarComponent />
        {children}
      </CartProvider>
    </div>
  );
};
