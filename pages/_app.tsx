import { NextPage } from 'next'
import MainLayout from 'components/MainLayout'
import { getSideBarLinks } from 'lib/docsItems'
import '../styles/globals.css'

type Props = {
  sideBarLinks: Array<{ link: string; name: string }>
  Component?: any
  pageProps?: any
}

const MyApp: NextPage<Props> = ({ sideBarLinks, Component, pageProps }) => {
  return (
    <MainLayout sideBarLinks={sideBarLinks}>
      <Component {...pageProps} />
    </MainLayout>
  )
}

MyApp.getInitialProps = async () => {
  return {
    sideBarLinks: getSideBarLinks(),
  }
}

export default MyApp
