import { Html, Head, Main, NextScript } from "next/document";
import Layout from "@/components/layout/Layout";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" href="/assets/icons/hover-phone.svg" as="image"/>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
