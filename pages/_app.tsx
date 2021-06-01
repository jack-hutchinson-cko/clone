import { NextPage } from 'next'
import { ThemeDefaultProvider } from '@cko/primitives'
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
    <ThemeDefaultProvider>
      <MainLayout sideBarLinks={sideBarLinks}>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeDefaultProvider>
  )
}

MyApp.getInitialProps = async () => {
  return {
    sideBarLinks: getSideBarLinks(),
  }
}

export default MyApp
