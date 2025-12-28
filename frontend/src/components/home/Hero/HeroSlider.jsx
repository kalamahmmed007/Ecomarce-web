import { useState, useEffect } from "react";
import HeroBanner from "./HeroBanner";
import hero1 from "../../../assets/images/hero1.jpg";
import hero2 from "../../../assets/images/hero2.jpg";
import hero3 from "../../../assets/images/hero3.jpg";

const slides = [
    { id: 1, title: "New Arrivals", subtitle: "Check out the latest products", image: hero1 },
    { id: 2, title: "Best Deals", subtitle: "Hot discounts this week", image: hero2 },
    { id: 3, title: "Top Picks", subtitle: "Trending products for you", image: hero3 },
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-96 w-full overflow-hidden rounded-lg md:h-[500px]">
            <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map(slide => (
                    <div key={slide.id} className="min-w-full">
                        <HeroBanner slide={slide} />
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 transform space-x-2">
                {slides.map((_, idx) => (
                    <span
                        key={idx}
                        className={`w-3 h-3 rounded-full cursor-pointer ${idx === current ? "bg-white" : "bg-gray-400"
                            }`}
                        onClick={() => setCurrent(idx)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
