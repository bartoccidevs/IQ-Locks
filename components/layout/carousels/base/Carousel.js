import React from "react"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export default function Carousel({ children }) {
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
            // console.log('slide changed')
          },
        },
        [
          // add plugins here
        ]
      )
      
    return (
        <div ref={sliderRef} className="keen-slider py-4 bg-theme-secondary">
          {children}
        </div>
    )
}