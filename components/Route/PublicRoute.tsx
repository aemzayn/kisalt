import { useRouter } from "next/router";
import { dashboard } from "constants/paths";
import { useAuthContext } from "context/AuthContext";

export type PublicRouteProps = {
  children: React.ReactNode;
  redirectPath?: string;
};

export default function PublicRoute({
  children,
  redirectPath = dashboard,
}: PublicRouteProps) {
  const router = useRouter();
  const { isLoading, isLogin } = useAuthContext();

  if (isLoading) {
    return <div className="h-screen bg-violet-100"></div>;
  }

  if (!isLoading && isLogin) {
    router.push(redirectPath);
  }

  return <>{children}</>;
}
