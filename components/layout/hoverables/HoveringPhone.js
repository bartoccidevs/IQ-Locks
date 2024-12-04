import CustomImage from "@/components/CustomImage"

export default function HoveringPhone() {
    function handlePhoneClick() {
        console.log('phone clicked')
    }

    return (
        <div className="hovering-phone bg-theme-dark fixed bottom-4 right-4 rounded-full pointer-events-auto hover:scale-110" onClick={handlePhoneClick}>
            <CustomImage src="/assets/icons/hover-phone.svg" className="h-20 w-20 p-4" alt="Call now button"/>
        </div>
    )
}