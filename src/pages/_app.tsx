import { ToastContainer } from 'react-toastify'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

import 'antd/dist/antd.css'
import '../../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
export type NextPageWithLayout<P = any> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout): ReactNode {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <DndProvider backend={HTML5Backend}>
      <ToastContainer limit={4} autoClose={3000} position="top-right" theme="colored" />
      <Component {...pageProps} />
    </DndProvider>
  )
}

export default MyApp
