import { useState, useEffect } from "react";
import CategoryCard from "../Categories/CategoryCard";

// Dummy deals data
const dummyDeals = [
    { id: 1, name: "Wireless Headphones", image: "/images/deal1.jpg" },
    { id: 2, name: "Smart Watch", image: "/images/deal2.jpg" },
    { id: 3, name: "Gaming Mouse", image: "/images/deal3.jpg" },
    { id: 4, name: "Mechanical Keyboard", image: "/images/deal4.jpg" },
    { id: 5, name: "Bluetooth Speaker", image: "/images/deal5.jpg" },
    { id: 6, name: "Fitness Tracker", image: "/images/deal6.jpg" },
    { id: 7, name: "Laptop Stand", image: "/images/deal7.jpg" },
    { id: 8, name: "USB Hub", image: "/images/deal8.jpg" },
    { id: 9, name: "Portable Charger", image: "/images/deal9.jpg" },
    { id: 10, name: "LED Desk Lamp", image: "/images/deal10.jpg" },
];

const DealOfTheDay = ({ deals = dummyDeals }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // How many items to show per view based on screen width
    const getItemsPerView = () => {
        if (window.innerWidth >= 1024) return 4;
        if (window.innerWidth >= 640) return 2;
        return 1;
    };

    const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

    useEffect(() => {
        const handleResize = () => setItemsPerView(getItemsPerView());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Auto-slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev =>
                prev + itemsPerView >= deals.length ? 0 : prev + itemsPerView
            );
        }, 3000);
        return () => clearInterval(interval);
    }, [deals, itemsPerView]);

    return (
        <section className="relative overflow-hidden bg-gray-50 py-8">
            <h2 className="mb-6 text-center text-2xl font-semibold">Deal of the Day</h2>

            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-700"
                    style={{
                        transform: `translateX(-${(currentIndex / deals.length) * 100}%)`,
                        width: `${(deals.length / itemsPerView) * 100}%`,
                    }}
                >
                    {deals.map((deal) => (
                        <div
                            key={deal.id}
                            className={`p-2`}
                            style={{ width: `${100 / deals.length}%` }}
                        >
                            <CategoryCard data={deal} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
                {Array.from({ length: Math.ceil(deals.length / itemsPerView) }).map((_, idx) => (
                    <span
                        key={idx}
                        className={`w-3 h-3 rounded-full cursor-pointer ${idx === Math.floor(currentIndex / itemsPerView) ? "bg-black" : "bg-gray-400"
                            }`}
                        onClick={() => setCurrentIndex(idx * itemsPerView)}
                    />
                ))}
            </div>
        </section>
    );
};

export default DealOfTheDay;
