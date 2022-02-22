import { useRouter } from "next/router";
import { useAuthContext } from "context/AuthContext";

export type PrivateRouteProps = {
  children: React.ReactNode;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const router = useRouter();
  const { user, isLoading } = useAuthContext();

  if (isLoading) {
    return <></>;
  }

  if (!isLoading && !user) {
    router.push("/");
  }

  return <>{children}</>;
}
