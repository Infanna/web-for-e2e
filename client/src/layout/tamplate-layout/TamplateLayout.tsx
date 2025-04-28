import { NavBarComponent } from "../../components/nav-bar/NavBarComponent";

export function TemplateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <NavBarComponent />
        {children}
      </div>
    </>
  );
}
