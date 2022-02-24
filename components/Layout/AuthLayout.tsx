import { AuthProvider } from "context/AuthContext";
import AuthHeader from "components/Header/AuthHeader";

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <AuthProvider>
      <div className="min-h-screen">
        <AuthHeader />
        <div id="cover" className="cover hidden" />
        {children}
      </div>
    </AuthProvider>
  );
}
