import CustomImage from "@/components/CustomImage";
import Link from "next/link";

export default function HoveringPhone() {
    function handlePhoneClick() {
        console.log('phone clicked')
    }

    return (
        <Link href="tel:1-917-572-0664">
            <div className="md:hidden hovering-phone bg-theme-dark fixed bottom-4 right-4 rounded-full pointer-events-auto hover:scale-110" onClick={handlePhoneClick}>
                <CustomImage src="/assets/icons/hover-phone.svg" className="h-16 w-16 p-4" alt="Call now button"/>
            </div>
        </Link>
    )
}