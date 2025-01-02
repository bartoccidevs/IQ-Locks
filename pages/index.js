import Head from "next/head";
import HomepageHero from "@/components/pages/homepage/HomepageHero";

// Data Imports
import siteData from "@/data/site-identity";
import metaData from "@/data/metaData/homePage"; 

export default function Home(props) {
  return (
    <div className="main-page home-page bg-theme-background">
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta property="og:title" content={metaData.ogTitle} />
        <meta property="og:description" content={metaData.ogDescription} />
        <meta property="og:image" content={metaData.ogImage} />
      </Head>
      <HomepageHero data={siteData}/>
    </div>
  );
}
