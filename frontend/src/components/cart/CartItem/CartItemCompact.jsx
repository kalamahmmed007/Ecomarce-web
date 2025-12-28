// src/components/cart/CartItem/CartItemCompact.jsx
const CartItemCompact = ({ item }) => (
    <div className="flex items-center space-x-2 border-b p-2">
        <img src={item.image} alt={item.name} className="h-12 w-12 rounded object-cover" />
        <div className="flex-1">
            <h4 className="text-sm font-medium">{item.name}</h4>
            <p className="text-xs text-gray-500">{item.quantity} x ${item.price.toFixed(2)}</p>
        </div>
    </div>
);

export default CartItemCompact;
