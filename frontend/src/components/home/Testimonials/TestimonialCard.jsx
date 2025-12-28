// src/components/home/Deals/FlashSale.jsx
import ProductCard from "../../product/ProductCard/ProductCard";

const flashProducts = [
    { id: 201, name: "Bluetooth Speaker", price: 39, image: "/images/product5.jpg" },
    { id: 202, name: "Wireless Earbuds", price: 29, image: "/images/product6.jpg" },
    { id: 203, name: "Smart Lamp", price: 49, image: "/images/product7.jpg" },
];

const FlashSale = () => (
    <section className="py-12">
        <h2 className="mb-6 text-center text-2xl font-semibold">Flash Sale</h2>
        <div className="flex gap-4 overflow-x-auto px-4">
            {flashProducts.map(p => (
                <div key={p.id} className="w-64 flex-shrink-0">
                    <ProductCard product={p} />
                </div>
            ))}
        </div>
    </section>
);

export default FlashSale;
