import CustomImage from "@/components/CustomImage";
import Link from "next/link";
import siteData from "@/data/site-identity";

export default function HoveringPhone() {
    function handlePhoneClick() {
        console.log('phone clicked')
    }

    return (
        <Link href={`tel:${siteData.phone}`} aria-label="Click to call the locksmith">
            <div className="md:hidden hovering-phone bg-theme-primary fixed bottom-4 right-4 rounded-full pointer-events-auto hover:scale-110
            border-theme-background-dark
            dark:border-theme-background
            " onClick={handlePhoneClick}>
                <CustomImage src="/assets/icons/hover-phone.svg" className="h-16 w-16 p-4" alt="Call now button"/>
            </div>
        </Link>
    )
}