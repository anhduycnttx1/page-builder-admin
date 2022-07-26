import Head from 'next/head'
import { ReactElement, useEffect, useState } from 'react'
import DashboardLayout from '../../../../layout/dashboard'
import DecorationSetupContainer from '../../../../container/decoration/setup-page'
import { useRouter } from 'next/router'
import { Row, Spin } from 'antd'
export default function DecorationSetupPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  // if (tab && (tab === 'page-mb' || tab === 'page-pc')) {
  return (
    <>
      <Head>
        <title>Quản lý </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <Row style={{ minHeight: 350, width: '100%' }} align="middle" justify="center">
          <Spin size="large" tip="loading..." />
        </Row>
      ) : (
        <DecorationSetupContainer />
      )}
    </>
  )

  //   return router.push(`/portal/decoration/setup/${pageId}?tag=page-mb`)
}

DecorationSetupPage.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
