import data from "@/data/pages/homepage/data"
import CustomImage from "@/components/CustomImage"
import Link from "next/link"

export default function InActionSection() {
    return (
        <div className="flex flex-col lg:flex-row bg-white text-black">
            <div className="flex justify-center bg-white">
                <CustomImage 
                width={500}
                src={data.portfolioSection.img}
                className="action-photo object-cover"
                alt={data.portfolioSection.imgAlt}/>
            </div>
            <div className="flex flex-col w-full lg:w-1/2 p-4 text-center">
                <h2>{data.portfolioSection.header}</h2>
                <p className="py-2">{data.portfolioSection.paragraph}</p>
                <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-4 md:space-y-0 py-4">
                    <Link href="/portfolio">
                        <button className="w-full md:w-auto px-4 md:px-8 py-4 text-xl font-bold cta-button-gray" >View Portfolio</button>          
                    </Link>
                    <Link href="/contact">
                        <button className="w-full md:w-auto px-4 md:px-8 py-4 text-xl font-bold cta-button-orange" >Contact Us</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}