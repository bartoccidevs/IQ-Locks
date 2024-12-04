import Carousel from "./base/Carousel";
import CarouselSlide from "./base/CarouselSlide";

const slides = [
    "24 | 7 emergency lockout services",
    "24 | 7 emergency lockout services",
]

export default function EmergencyLockoutCarousel() {
    return (
        <Carousel>
            {slides.map((slide,i) => (
                <CarouselSlide key={i}>
                    <p className="uppercase text-1xl text-center text-theme-dark font-bold">
                        {slide}
                    </p>
                </CarouselSlide>
            ))}
        </Carousel>
    )
}