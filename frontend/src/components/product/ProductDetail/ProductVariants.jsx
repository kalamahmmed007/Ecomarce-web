// src/components/product/ProductDetail/ProductVariants.jsx
const ProductVariants = ({ variants }) => {
    if (!variants?.length) return null;

    return (
        <div className="mt-4">
            <h2 className="mb-2 text-lg font-medium">Variants</h2>
            <div className="flex space-x-2">
                {variants.map((v, idx) => (
                    <button
                        key={idx}
                        className="rounded border px-3 py-1 transition hover:bg-gray-100"
                    >
                        {v.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductVariants;
