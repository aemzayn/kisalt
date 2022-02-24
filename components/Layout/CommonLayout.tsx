import Header from "../Header/Header";

export type CommonLayoutProps = {
  children?: React.ReactNode;
};

export default function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="cover" className="cover hidden" />
      {children}
    </div>
  );
}
