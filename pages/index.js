import siteData from "@/data/site-identity";
import Head from "next/head";
import HomepageHero from "@/components/pages/homepage/HomepageHero";

export default function Home(props) {
  return (
    <div className="main-page bg-theme-background">
      <Head>
        <title>Welcome to {siteData.name} | Home</title>
        <meta name="description" content="A brief description of the page content." />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <meta property="og:title" content={`${siteData.name} | Home`} />
        <meta property="og:description" content="Description Here" />
        <meta property="og:image" content="/assets/photos/lock-picking.jpg" />
      </Head>
      <HomepageHero data={siteData}/>
    </div>
  );
}
