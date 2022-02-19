import Header from "./Header";

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen">
      <div className="container max-w-2xl mx-auto">
        <Header />
        {children}
      </div>
    </div>
  );
}
