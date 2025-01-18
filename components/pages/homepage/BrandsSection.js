import CustomImage from "@/components/CustomImage"
import useWindowDimensions from "@/components/useWindowDimensions"
import Link from "next/link"

import { BrandsSection as data } from "@/data/pages/HomePageData"

export default function BrandsSection() {
    return (
        <div className="inline-padding text-center bg-gray-300 text-black py-8 page-section">
            <h2 className="">{data.header}</h2>
            <p className="py-4">{data.subHeader}</p>
            <div className="w-full flex flex-wrap justify-center py-4 md:py-8">
                {data.brands.map((brand, i) => {
                    return (
                        <BrandDiv 
                            img={brand.img} 
                            imgAlt={brand.imgAlt}
                            key={i}/>
                    )
                })}
            </div>
            <Link href="/brands">
                <p className="underline">View Detailed List</p>
            </Link>
        </div>
    )
}

function BrandDiv({ img, imgAlt }) {
    const { width } = useWindowDimensions();
    return (
        <div className="flex justify-center w-1/3 md:w-1/6 lg:w-1/8 p-2">
            <CustomImage 
            width={50}
            height={0}
            sizes="(min-width: 100px)"
            src={img}
            alt={imgAlt}
            className="border border-black w-full object-contain"/>
        </div>
    )
}