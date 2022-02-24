import Header from "../Header/Header";

export type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="cover" className="cover hidden" />
      {children}
    </div>
  );
}
