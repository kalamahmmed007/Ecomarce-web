// src/components/product/ProductDetail/ProductSpecifications.jsx
const ProductSpecifications = ({ specifications }) => {
    if (!specifications) return null;

    return (
        <div className="mt-4">
            <h2 className="mb-2 text-lg font-medium">Specifications</h2>
            <ul className="list-inside list-disc text-gray-700">
                {Object.entries(specifications).map(([key, value]) => (
                    <li key={key}>
                        <span className="font-semibold">{key}:</span> {value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductSpecifications;
