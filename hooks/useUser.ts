import useSWR from 'swr'
import { checkAuth } from 'constants/paths'
import { fetcher } from 'lib/fetcher'

const useUser = () => {
  const { data, error } = useSWR(checkAuth, fetcher)
  const isLoading = !error && !data
  const isLogin = !isLoading && data && data.isLogin
  const isErrorData = !isLoading && data && data.error && data.error.message

  return {
    isLoading,
    data,
    isError: Boolean(error || isErrorData),
    isLogin,
  }
}

export default useUser
