// src/components/user/Wishlist/Wishlist.jsx
import WishlistItem from "./WishlistItem";

const Wishlist = ({ items, onRemove }) => (
    <div className="space-y-4">
        <h2 className="text-2xl font-semibold">My Wishlist</h2>
        {items.length ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map(item => (
                    <WishlistItem key={item.id} product={item} onRemove={onRemove} />
                ))}
            </div>
        ) : (
            <p className="text-gray-500">Your wishlist is empty.</p>
        )}
    </div>
);

export default Wishlist;
