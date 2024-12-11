import Link from "next/link"

export default function HomepageHero({ data }) {
    return (
        <div className="bg-theme-secondary text-center">
            <div className="homepage-hero w-screen">
                <div className="homepage-hero-blur backdrop-blur-sm h-full w-full flex items-center justify-center">
                    <div className="inline-padding text-theme-text-contrast py-6 my-12 md:my-24 space-y-6">
                        <h1 className="text-6xl font-bold">
                            <span className="text-theme-secondary">IQ </span>
                            Locks
                        </h1>
                        <p className="text-2xl font-semibold pb-6">A New York City Based Locksmith</p>
                        <Link href="/contact">
                            <button className="bg-theme-secondary px-8 py-4 text-3xl font-bold rounded-lg cta-button" >Get in Touch</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}