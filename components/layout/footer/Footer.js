import React from "react"
import EmergencyLockoutCarousel from "../carousels/EmergencyLockoutCarousel"
import QuickLinkSection from "./QuickLinkSection"
import CopyrightSection from "./CopyrightSection"

export default function Footer() {
    return (
        <footer>
            <div className="bg-theme-dark">
              <EmergencyLockoutCarousel />
              <QuickLinkSection />
              <CopyrightSection />
            </div>
        </footer>
    )
}