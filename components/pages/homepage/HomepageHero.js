import Link from "next/link"
import CustomImage from "@/components/CustomImage"

export default function HomepageHero({ data }) {
    return (
        <div className="bg-theme-secondary text-center">
            <div className="w-screen relative overflow-hidden">
                <CustomImage 
                height={500} width={500}
                src="/assets/photos/new-york-city-skyline.jpg" 
                className="w-full absolute hero-image"
                alt="New york city skyline"/>
                <div className="homepage-hero-blur backdrop-blur-sm w-full flex items-center justify-center">
                    <div className="inline-padding text-theme-text-contrast py-6 my-8 md:my-24 space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            <span className="text-theme-secondary">IQ </span>
                            Locks
                        </h1>
                        <p className="text-xl font-semibold pb-6">A New York City Based Locksmith</p>
                        <Link href="/contact">
                            <button className="bg-theme-secondary px-8 py-4 text-2xl font-bold rounded-lg cta-button" >Get in Touch</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}