// src/components/cart/CartSummary/CartSummary.jsx
import { useCart } from "../../../hooks/useCart";

const CartSummary = () => {
    const { total, items } = useCart();

    return (
        <div className="border-t p-4">
            <div className="mb-2 flex justify-between">
                <span>Items:</span>
                <span>{items.length}</span>
            </div>
            <div className="mb-4 flex justify-between font-semibold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full rounded bg-blue-600 py-2 text-white transition hover:bg-blue-700">Checkout</button>
        </div>
    );
};

export default CartSummary;
