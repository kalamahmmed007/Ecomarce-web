// src/components/product/ProductList/ProductGrid.jsx
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({ products }) => {
    if (!products?.length) return <p className="text-center">No products found.</p>;

    return (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;
