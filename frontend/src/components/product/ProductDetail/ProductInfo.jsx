// src/components/product/ProductDetail/ProductInfo.jsx
const ProductInfo = ({ product }) => (
    <div>
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <p className="mt-2 text-gray-600">${product.price.toFixed(2)}</p>
        <p className="mt-1 text-green-600">{product.inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
);

export default ProductInfo;
