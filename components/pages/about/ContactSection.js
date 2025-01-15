import siteData from "@/data/site-identity"
import Link from "next/link"

export default function ContactSection() {
    return (
        <div className="text-black py-4">
            <div className="bg-gray-200 rounded-xl p-4">
                <h2 className="text-theme-primary">Need Assistance?</h2>
                <p className="py-2">If you're facing a truck issue and need immediate help, Rolon 
                    Mobile Truck Repair is just a call away. Our expert team is 
                    ready 24/7 to provide you with fast, reliable, and efficient 
                    roadside assistance. Don't let a breakdown disrupt your schedule. 
                    Reach out to us now for professional service that gets you back 
                    on the road quickly and safely. Your peace of mind is our top 
                    priority. Call Rolon Mobile Truck Repair – where help is always 
                    on the way!</p>
                <Link href={`tel:${siteData.phone}`} aria-label="Click to contact the locksmith">
                    <button className="px-4 md:px-8 py-4 my-2 text-xl font-bold cta-button-orange">
                        Get Help Now
                    </button>
                </Link>
            </div>
        </div>
    )
}