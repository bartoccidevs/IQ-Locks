import { Html, Head, Main, NextScript } from "next/document";
import Layout from "@/components/layout/Layout";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link 
        rel="preload"
        href="/fonts/NotoSansThai.ttf"
        as="font"
        crossOrigin=""/>
        <link 
        rel="preload"
        href="/fonts/Labrada-VariableFont_wght.ttf"
        as="font"
        crossOrigin=""/>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
