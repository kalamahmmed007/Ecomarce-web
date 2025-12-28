import { useState, useEffect } from "react";
import ProductCard from "../../product/ProductCard/ProductCard";

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Responsive config: how many items per view
    const getItemsPerView = () => {
        if (window.innerWidth >= 1024) return 4; // Desktop
        if (window.innerWidth >= 640) return 2;  // Tablet
        return 1;                                 // Mobile
    };

    const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

    useEffect(() => {
        const handleResize = () => setItemsPerView(getItemsPerView());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Fetch dummy products
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err));
    }, []);

    // Auto-slide
    useEffect(() => {
        if (products.length === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex(prev =>
                prev + itemsPerView >= products.length ? 0 : prev + itemsPerView
            );
        }, 3000);
        return () => clearInterval(interval);
    }, [products, itemsPerView]);

    if (products.length === 0) return <p className="py-12 text-center">Loading products...</p>;

    return (
        <section className="relative overflow-hidden bg-gray-50 py-12">
            <h2 className="mb-6 text-center text-2xl font-semibold">Featured Products</h2>

            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-700"
                    style={{
                        transform: `translateX(-${(currentIndex / products.length) * 100}%)`,
                        width: `${(products.length / itemsPerView) * 100}%`,
                    }}
                >
                    {products.map((product, idx) => (
                        <div
                            key={product.id}
                            className={`p-2`}
                            style={{ width: `${100 / products.length}%` }}
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
                {Array.from({ length: Math.ceil(products.length / itemsPerView) }).map((_, idx) => (
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

export default FeaturedProducts;
