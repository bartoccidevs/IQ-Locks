import Link from "next/link"
import CustomImage from "@/components/CustomImage"
import useWindowDimensions from "@/components/useWindowDimensions"

export default function HomepageHero({ data }) {
    const { width } = useWindowDimensions();

    return (
        <>
            <div className="bg-theme-secondary text-center">
                <div className="w-screen relative overflow-hidden" >
                    <CustomImage 
                    width={width}
                    height={0}
                    src="/assets/photos/new-york-city-skyline-tall.jpeg" 
                    className="w-full absolute hero-image"
                    alt="New york city skyline"
                    priority/>
                    <div className="homepage-hero-blur backdrop-blur-sm w-full flex items-center justify-center">
                        <div className="text-theme-text-dark inline-padding py-6 md:py-4 my-8 md:my-24 space-y-8">
                            <h1 className="text-3.5xl md:text-6xl font-bold">
                                <span className="text-theme-primary">IQ </span>
                                Locks
                            </h1>
                            <p className="font-semibold pb-6">A New York City Based Locksmith</p>
                            <Link href="/contact">
                                <button className="bg-theme-primary px-4 md:px-8 py-4 text-xl font-bold rounded-lg cta-button" >Get in Touch</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}