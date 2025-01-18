import CustomImage from "@/components/CustomImage"
import useWindowDimensions from "@/components/useWindowDimensions"
import Link from "next/link"

import  { services }  from "@/data/siteData.js";
import { ServicesSection as data } from "@/data/pages/HomePageData";

export default function ServicesSection() {
    return (
        <div className="text-center flex flex-col items-center page-section rounded-3xl bg-white service-area">
            <Link href="/services">
                <h2 className="text-black">{data.header}</h2>
            </Link>
            <div className="border border-black bg-black h-1 w-32 my-4 rounded-full"></div>
            <div className="w-full flex flex-wrap justify-center border border-grey rounded">
                {services.map((service, i) => {
                    return (
                        <ServiceDiv 
                        title={service.title} 
                        description={service.description}
                        img={service.img}
                        imgAlt={service.imgAlt}
                        key={i}/>
                    )
                })}
            </div>
        </div>
    )
}


function ServiceDiv({ title, description, img, imgAlt}) {
    const { width } = useWindowDimensions();

    return (
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="border-black border rounded cursor-pointer service-block bg-theme-primary text-white">
                <h3 className="text-2xl font-semibold py-2 px-1">{title}</h3>
                <CustomImage 
                width={width/4}
                height={0}
                src={img}
                className="w-full h-60"
                alt={imgAlt}/>
            </div>
        </div>
    )
}