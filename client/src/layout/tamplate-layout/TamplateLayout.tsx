export function TemplateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <p>Logout</p>
        <p>icon cart</p>
      </nav>
      {children}
    </>
  );
}
