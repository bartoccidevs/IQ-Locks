import CustomImage from "@/components/CustomImage"
import Link from "next/link"
import siteData from "@/data/site-identity"

export default function HoveringEmail() {
    function handlePhoneClick() {
        console.log('email clicked')
    }

    return (
        <Link href={`mailto: ${siteData.email}`} aria-label="Click to open an email to the locksmith">
            <div className="hidden md:flex hovering-email bg-theme-primary fixed bottom-10 right-10 rounded-full pointer-events-auto hover:scale-110
            border-theme-background-dark
            dark:border-theme-background
            " onClick={handlePhoneClick}>
                <CustomImage src="/assets/icons/open-email.svg" className="h-24 w-24 p-4" alt="open email button"/>
            </div>
        </Link>
    )
}