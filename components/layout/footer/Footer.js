import React from "react"
import RequestForm from "./RequestForm"
import EmergencyLockoutCarousel from "../carousels/EmergencyLockoutCarousel"
import QuickLinkSection from "./QuickLinkSection"
import CopyrightSection from "./CopyrightSection"

export default function Footer() {
    return (
        <footer>
            <div className="bg-theme-dark">
              <RequestForm />
              <EmergencyLockoutCarousel />
              <QuickLinkSection />
              <CopyrightSection />
            </div>
        </footer>
    )
}