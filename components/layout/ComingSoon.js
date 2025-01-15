import Link from "next/link"
import CustomImage from "../CustomImage"

export default function ComingSoon() {
    return (
        <div className="main-page flex flex-col justify-center items-center pt-24 h-screen bg-white text-black text-center inline-padding">
            <CustomImage 
            width={100}
            src="/assets/icons/logo.svg"
            className="w-1/3"
            />
            <h1 className="text-6xl font-semibold py-4">Page Coming Soon</h1>
            <Link href="/">
                <button className="w-full md:w-auto px-4 md:px-8 py-4 text-xl font-bold cta-button-orange">Back to Home</button>
            </Link>
        </div>
    )
}