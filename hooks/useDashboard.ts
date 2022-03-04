import useSWR from 'swr'
import { fetcherWithAuth } from 'lib/fetcher'
import { getMyDashboardApi } from 'constants/paths'

const useDashboard = (userId: string) => {
  const { data, error } = useSWR(getMyDashboardApi(userId), fetcherWithAuth)
  const isLoading = !data && !error
  return {
    data,
    error,
    isLoading,
  }
}

export default useDashboard
