import MetaHead from "@/components/MetaHead";
import HomepageHero from "@/components/pages/homepage/HomepageHero";
import IntroSection from "@/components/pages/homepage/IntroSection";
import ServicesSection from "@/components/pages/homepage/ServicesSection";
import BrandsSection from "@/components/pages/homepage/BrandsSection";
import InActionSection from "@/components/pages/homepage/InActionSection";

// Data Imports
import { HomePageMetaData } from "@/data/metaData";

export default function Home() {
  return (
    <div className="main-page bg-theme-background-dark">
      <MetaHead metaData={HomePageMetaData}/>
      <HomepageHero/>
      <IntroSection />
      <ServicesSection />
      <BrandsSection />
      <InActionSection />
    </div>
  );
}
