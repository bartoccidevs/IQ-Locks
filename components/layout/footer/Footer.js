import React from "react"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import FooterSlide from "../FooterSlide"
import RequestForm from "./RequestForm"
import QuickLinkSection from "./QuickLinkSection"
import CopyrightSection from "./CopyrightSection"

export default function Footer() {
    const animation = { duration: 25000, easing: (t) => t }
    
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            renderMode: performance,
            drag: false,
            created(s) {
                s.moveToIdx(5, true, animation)
              },
              updated(s) {
                s.moveToIdx(s.track.details.abs + 5, true, animation)
              },
              animationEnded(s) {
                s.moveToIdx(s.track.details.abs + 5, true, animation)
              },
          slideChanged() {
            console.log('slide changed')
          },
        },
        [
          // add plugins here
        ]
      )
      
    return (
        <footer>
            <div className="h-10 bg-theme-dark">
              <RequestForm />
                <div ref={sliderRef} className="keen-slider py-4 bg-theme-light">
                    <FooterSlide />
                    <FooterSlide />
                </div>
                <QuickLinkSection />
                <CopyrightSection />
            </div>
        </footer>
    )
}