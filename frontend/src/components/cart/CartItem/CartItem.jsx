// src/components/cart/CartItem/CartItem.jsx
import { useCart } from "../../../hooks/useCart";

const CartItem = ({ item }) => {
    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div className="flex items-center justify-between border-b p-2">
            <img src={item.image} alt={item.name} className="h-16 w-16 rounded object-cover" />
            <div className="flex-1 px-2">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
                <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, +e.target.value)}
                    className="w-16 rounded border text-center"
                />
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">&times;</button>
            </div>
        </div>
    );
};

export default CartItem;
