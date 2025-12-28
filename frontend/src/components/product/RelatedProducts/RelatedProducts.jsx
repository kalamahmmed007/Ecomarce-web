// src/components/product/RelatedProducts/RelatedProducts.jsx
import ProductCard from "../ProductCard/ProductCard";

const RelatedProducts = ({ products }) => {
    if (!products?.length) return null;

    return (
        <div className="mt-8">
            <h2 className="mb-4 text-xl font-semibold">Related Products</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {products.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
        </div>
    );
};

export default RelatedProducts;
