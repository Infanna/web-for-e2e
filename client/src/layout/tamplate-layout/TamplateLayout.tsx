import { NavBarComponent } from "../../components/nav-bar/NavBarComponent";

// Additional props here
type TemplateLayoutProps = {};

export const TemplateLayout: React.FC<
  React.PropsWithChildren<TemplateLayoutProps>
> = ({ children, ...props }) => {
  return (
    <div>
      <NavBarComponent />
      {children}
    </div>
  );
};
