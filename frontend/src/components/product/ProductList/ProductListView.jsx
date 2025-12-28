// src/components/product/ProductList/ProductListView.jsx
import ProductCardHorizontal from "../ProductCard/ProductCardHorizontal";

const ProductListView = ({ products }) => {
    if (!products?.length) return <p className="text-center">No products found.</p>;

    return (
        <div className="space-y-4">
            {products.map((product) => (
                <ProductCardHorizontal key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductListView;
