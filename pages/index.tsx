import { NextSeo } from 'next-seo'
import { useEffect } from 'react'

import Layout from '../components/Layout/Layout'
import HeroWrapper from 'components/Home/HeroWrapper'
import HomeInfo from 'components/Home/HomeInfo'
import { useAlertContext } from 'context/AlertContext'

export default function HomePage() {
  const { setAlert } = useAlertContext()

  useEffect(() => {
    setAlert({
      title: 'Invalid credentials',
      closeText: 'Cancel',
      confirmText: 'Confirm',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id?',
      type: 'error',
    })
  }, [])

  return (
    <Layout>
      <NextSeo title="Home" />
      <div className="bg-violet-100">
        <HeroWrapper />
        <HomeInfo />
      </div>
    </Layout>
  )
}
