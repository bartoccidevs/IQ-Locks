import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import ThemeProvider from "./providers/ThemeProvider";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
  ;
}
