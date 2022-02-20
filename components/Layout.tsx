import Header from "./Header";

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="cover" className="cover hidden" />
      {children}
    </div>
  );
}
