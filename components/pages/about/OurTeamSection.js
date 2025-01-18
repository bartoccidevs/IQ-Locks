import Image from "next/image"

export default function OurTeamSection() {
    return (
        <div className="flex flex-col bg-gray-200 text-black inline-padding text-center items-center">
            <h2>Our Team</h2>
            <div className="bg-black rounded h-1 w-24 my-2"></div>
            <TeamMember />
        </div>
    )
}

function TeamMember() {
    return (
        <div className="rounded text-center w-full">
            <Image src="/assets/photos/lock-picking.jpg" 
            width={100} 
            height={100} 
            className="w-full aspect-square rounded"/>
            {/* <div className="py-4">
                <h3 className="text-theme-primary text-3xl font-semibold">Itamar Lax</h3>
                <p className="">Owner / Locksmith</p>
            </div> */}
        </div>
    )
}