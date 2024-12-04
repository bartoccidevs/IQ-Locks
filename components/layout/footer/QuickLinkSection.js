import CustomImage from "@/components/CustomImage"

export default function QuickLinkSection() {
    return (
        <div className="quicklink-section px-4 space-y-4">
            <div className="pt-4">
                <h2 className="text-white text-2xl font-semibold py-2">
                    Our Services
                </h2>
                <div className="space-y-1 text-theme-light text-1xl">
                    <p>Residential Locksmith</p>
                    <p>Commercial Locksmith</p>
                    <p>Car & Auto Locksmith</p>
                    <p>24/7 Emergency Locksmith</p>
                    <p>Windows and Doors</p>
                    <p>Security Systems</p>
                </div>
            </div>
            <div className="">
                <h2 className="text-white text-2xl font-semibold py-2">
                    Service Areas
                </h2>
                <div className="space-y-1 text-theme-light text-1xl">
                    <p>Manhattan, NY</p>
                    <p>Brooklyn, NY</p>
                    <p>The Bronx, NY</p>
                    <p>Queens, NY</p>
                    <p>Staten Island, NY</p>
                </div>
            </div>
            <div className="">
                <h2 className="text-white text-2xl font-semibold py-2">
                    Resources
                </h2>
                <div className="space-y-1 text-theme-light text-1xl">
                    <p>Home</p>
                    <p>About</p>
                    <p>Our Blog</p>
                    <p>Contact</p>
                </div>
            </div>
            <div>
                <h2 className="text-white text-2xl font-semibold py-2">
                    Find Us
                </h2>
                <div className="flex">
                    <CustomImage src="/assets/icons/instagram.svg" className="h-8 w-8 mr-3 mb-4" alt="instagram logo link"/>
                    <CustomImage src="/assets/icons/twitter.svg" className="h-8 w-8 mr-3 mb-4" alt="twitter logo link"/>
                    <CustomImage src="/assets/icons/facebook.svg" className="h-8 w-8 mr-3 mb-4" alt="facebook logo link"/>
                    <CustomImage src="/assets/icons/linkedin.svg" className="h-8 w-8 mr-3 mb-4" alt="linked in logo link"/>
                    <CustomImage src="/assets/icons/youtube.svg" className="h-8 w-8 mr-3 mb-4" alt="youtube logo link"/>
                </div>
            </div>
        </div>
    )
}