import data from "@/data/pages/homepage/data"

export default function IntroSection() {
    return (
        <div className="flex flex-col page-section text-center items-center text-white">
            <h2 className="">{data.introSection.header}</h2>
            <div className="border border-white bg-white h-1 w-60 my-4 rounded-full"></div>
            <p className="md:w-4/5">{data.introSection.subHeader}</p>
        </div>
    )
}