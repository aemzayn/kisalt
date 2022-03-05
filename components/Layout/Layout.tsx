import Cover from 'components/Cover'
import Footer from 'components/Footer'
import useHeader from 'hooks/useHeader'
import Header from '../Header/Header'

export type LayoutProps = {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { isHeaderOpen, toggleMobileHeader, closeHeader } = useHeader()
  return (
    <div className="min-h-screen">
      <Header
        isHeaderOpen={isHeaderOpen}
        toggleMobileHeader={toggleMobileHeader}
      />
      <Cover closeHeader={closeHeader} />
      {children}
      <Footer />
    </div>
  )
}
