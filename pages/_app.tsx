import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import MainLayout from '../components/MainLayout'
import '../styles/globals.css'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
