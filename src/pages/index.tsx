import Head from 'next/head'
import { ReactElement } from 'react'
import DashboardLayout from '../layout/dashboard'
import HomeContainer from '../container/home'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer />
    </>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
