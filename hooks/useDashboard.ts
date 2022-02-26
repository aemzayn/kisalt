import useSWR from "swr";

import { getDashboardApi } from "constants/paths";
import { fetcherWithAuth } from "lib/fetcher";

const useDashboard = (userId: string) => {
  const {} = useSWR(getDashboardApi(userId), fetcherWithAuth);
  const { data, error } = useSWR(
    "/api/clicks/total/" + userId,
    fetcherWithAuth
  );
  const isLoading = !data && !error;

  return {
    data,
    error,
    isLoading,
  };
};

export default useDashboard;
