// src/components/home/Deals/FlashSale.jsx
import ProductCard from "../../product/ProductCard/ProductCard";

const flashProducts = [
    { id: 201, name: "Bluetooth Speaker", price: 39, image: "/images/product5.jpg" },
    { id: 202, name: "Wireless Earbuds", price: 29, image: "/images/product6.jpg" },
    { id: 203, name: "Smart Lamp", price: 49, image: "/images/product7.jpg" },
    { id: 204, name: "Smart Watch", price: 59, image: "/images/product8.jpg" },
    { id: 205, name: "Power Bank", price: 19, image: "/images/product9.jpg" },
];

const FlashSale = () => (
    <section className="bg-gray-50 py-12">
        <h2 className="mb-6 text-center text-2xl font-semibold">Flash Sale</h2>
        <div className="scrollbar-hide flex gap-4 overflow-x-auto px-4">
            {flashProducts.map((product) => (
                <div key={product.id} className="w-60 flex-shrink-0">
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    </section>
);

export default FlashSale;
