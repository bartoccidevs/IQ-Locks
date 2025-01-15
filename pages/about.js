import PageHeader from "@/components/layout/PageHeader"
import ContactSection from "@/components/pages/about/ContactSection"
import IntroSection from "@/components/pages/about/IntroSection"
import OurTeamSection from "@/components/pages/about/OurTeamSection"


export default function About() {
    return (
        <>
            <PageHeader title="About IQ Locks"/>
            <OurTeamSection />
            <div className="grid lg:grid-cols-2 inline-padding lg:space-x-12 text-black">
                <IntroSection />
                <ContactSection />
            </div>
        </>
    )
}