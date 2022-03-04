import useSWR from 'swr'

import { getUrls } from 'constants/paths'
import { fetcherWithAuth } from 'lib/fetcher'

const useUrls = (id: string) => {
  const { data, error } = useSWR(getUrls(id), fetcherWithAuth)
  const isLoading = !data && !error

  return {
    data: data ? data.data : [],
    isLoading,
    isError: !!error,
  }
}

export default useUrls
