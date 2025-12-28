// src/components/user/Wishlist/WishlistItem.jsx
const WishlistItem = ({ product, onRemove }) => (
    <div className="flex flex-col rounded border p-4">
        <img
            src={product.image}
            alt={product.name}
            className="mb-2 h-48 w-full rounded object-cover"
        />
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <button
            onClick={() => onRemove(product.id)}
            className="mt-auto rounded bg-red-600 px-3 py-1 text-white transition hover:bg-red-700"
        >
            Remove
        </button>
    </div>
);

export default WishlistItem;
