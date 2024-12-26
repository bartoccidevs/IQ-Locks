import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import { GoogleTagManager } from '@next/third-parties/google'

export default function App({ Component, pageProps }) {
  let gtm_id = process.env.NEXT_PUBLIC_GTM_ID
  
  return (
    <>
    <Layout>
        <Component {...pageProps} />
    </Layout>
    <GoogleTagManager gtmId={gtm_id}/>
    </>
  )
  ;
}
