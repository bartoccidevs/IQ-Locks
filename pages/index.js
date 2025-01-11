import Head from "next/head";
import HomepageHero from "@/components/pages/homepage/HomepageHero";
import IntroSection from "@/components/pages/homepage/IntroSection";
import ServicesSection from "@/components/pages/homepage/ServicesSection";
import BrandsSection from "@/components/pages/homepage/BrandsSection";
import InActionSection from "@/components/pages/homepage/InActionSection";

// Data Imports
import siteData from "@/data/site-identity";
import metaData from "@/data/metaData/homePage"; 

export default function Home(props) {
  return (
    <div className="main-page bg-theme-background-dark">
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta property="og:title" content={metaData.ogTitle} />
        <meta property="og:description" content={metaData.ogDescription} />
        <meta property="og:image" content={metaData.ogImage} />
      </Head>
      <HomepageHero data={siteData}/>
      <IntroSection />
      <ServicesSection />
      <BrandsSection />
      <InActionSection />
    </div>
  );
}
