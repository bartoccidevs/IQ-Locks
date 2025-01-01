import Carousel from "./base/Carousel";
import CarouselSlide from "./base/CarouselSlide";

const slides = [
    "24 | 7 emergency lockout services",
    "24 | 7 emergency lockout services",
]

export default function EmergencyLockoutCarousel() {
    return (
        <Carousel sliderClass="py-4 
        bg-theme-primary        
        border-theme-divider dark:border-theme-divider-dark">
            {slides.map((slide,i) => (
                <CarouselSlide key={i}>
                    <p className="uppercase text-1xl text-center text-theme-text font-bold">
                        {slide}
                    </p>
                </CarouselSlide>
            ))}
        </Carousel>
    )
}