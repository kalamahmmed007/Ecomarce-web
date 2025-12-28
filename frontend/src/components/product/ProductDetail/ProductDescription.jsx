// src/components/product/ProductDetail/ProductDescription.jsx
const ProductDescription = ({ description }) => (
    <div className="mt-4">
        <h2 className="mb-2 text-lg font-medium">Description</h2>
        <p className="text-gray-700">{description}</p>
    </div>
);

export default ProductDescription;
