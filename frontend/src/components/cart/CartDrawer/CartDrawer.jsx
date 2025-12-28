// src/components/cart/CartDrawer/CartDrawer.jsx
import { useCart } from "../../../hooks/useCart";
import CartItem from "../CartItem/CartItem";
import CartEmpty from "../CartEmpty/CartEmpty";
import CartSummary from "../CartSummary/CartSummary";

const CartDrawer = ({ isOpen, onClose }) => {
    const { items } = useCart();

    return (
        <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex items-center justify-between border-b p-4">
                <h2 className="text-xl font-semibold">Your Cart</h2>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
                {items.length ? items.map(item => <CartItem key={item.id} item={item} />) : <CartEmpty />}
            </div>

            {items.length > 0 && <CartSummary />}
        </div>
    );
};

export default CartDrawer;
