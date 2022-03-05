import { useState } from 'react'
import useCover from './useCover'

const useHeader = () => {
  const [isHeaderOpen, setHeader] = useState(false)
  const { openCover, closeCover } = useCover()

  const closeHeader = () => {
    setHeader(false)
    closeCover()
  }

  const toggleMobileHeader = (status: boolean) => {
    if (status) {
      openCover()
    } else {
      closeCover()
    }
    setHeader(status)
  }

  return {
    isHeaderOpen,
    setHeader,
    toggleMobileHeader,
    closeHeader,
  }
}

export default useHeader
