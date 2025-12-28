// src/components/home/Categories/CategoryGrid.jsx
import React from "react";

const categories = [
    { id: 1, name: "Processor", icon: "/icons/processor.svg" },
    { id: 2, name: "Motherboard", icon: "/icons/motherboard.svg" },
    { id: 3, name: "SSD", icon: "/icons/ssd.svg" },
    { id: 4, name: "Laptops", icon: "/icons/laptop.svg" },
    { id: 5, name: "Graphics Card", icon: "/icons/gpu.svg" },
    { id: 6, name: "Mouse", icon: "/icons/mouse.svg" },
    { id: 7, name: "Keyboard", icon: "/icons/keyboard.svg" },
    { id: 8, name: "Action Camera", icon: "/icons/action-camera.svg" },
    { id: 9, name: "Gimbal Collection", icon: "/icons/gimbal.svg" },
    { id: 10, name: "Graphics Tablet", icon: "/icons/tablet.svg" },
    { id: 11, name: "Headphones & Headsets", icon: "/icons/headphones.svg" },
    { id: 12, name: "Power Bank", icon: "/icons/powerbank.svg" },
    { id: 13, name: "Speakers", icon: "/icons/speaker.svg" },
    { id: 14, name: "Monitor", icon: "/icons/monitor.svg" },
    { id: 15, name: "Networking", icon: "/icons/router.svg" },
    { id: 16, name: "Smart Watch", icon: "/icons/smartwatch.svg" },
];

const CategoryCard = ({ category }) => (
    <div className="flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-lg bg-white p-2 shadow transition hover:shadow-lg">
        <img src={category.icon} alt={category.name} className="mb-2 h-10 w-10" />
        <span className="text-center text-xs font-medium">{category.name}</span>
    </div>
);

const CategoryGrid = () => (
    <section className="bg-gray-50 py-8">
        <div className="mb-6 text-center">
            <h2 className="text-xl font-bold">Featured Category</h2>
            <p className="text-sm text-gray-600">Select Your Category</p>
        </div>
        <div className="md:grid-cols-16 grid grid-cols-4 justify-items-center gap-4 sm:grid-cols-8">
            {categories.map(cat => (
                <CategoryCard key={cat.id} category={cat} />
            ))}
        </div>
    </section>
);

export default CategoryGrid;
