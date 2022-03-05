import { useState } from 'react'

const useCover = () => {
  const [coverOpen, setCoverOpen] = useState<boolean>(false)

  const closeCover = () => {
    setCoverOpen(false)
    document.documentElement.classList.remove('no-scroll')
    document.body.classList.remove('no-scroll')
    document.getElementById('cover').classList.remove('open')
  }

  const openCover = () => {
    setCoverOpen(true)
    document.documentElement.classList.add('no-scroll')
    document.body.classList.add('no-scroll')
    document.getElementById('cover').classList.add('open')
  }

  return {
    coverOpen,
    closeCover,
    openCover,
  }
}

export default useCover
