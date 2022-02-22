import { fetcher } from "lib/fetcher";
import useSWR from "swr";

const useUser = () => {
  const { data, error } = useSWR("/api/auth/check-auth", fetcher);
  const isLoading = !data && !error;
  const isLogin = data && data.isLogin;
  const isError = data && data.error;

  return {
    isLoading,
    data: isLogin ? data : null,
    isError: Boolean(error || isError),
  };
};

export default useUser;
