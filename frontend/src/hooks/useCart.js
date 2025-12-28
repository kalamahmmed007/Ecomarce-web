// src/hooks/useCart.js
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, updateQuantity } from "../redux/slices/cartSlice";

export const useCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.total);

    const addItem = (item) => dispatch(addToCart(item));
    const removeItem = (id) => dispatch(removeFromCart(id));
    const updateItemQty = (id, qty) => dispatch(updateQuantity({ id, qty }));

    return {
        cartItems,
        total,
        addItem,
        removeItem,
        updateItemQty,
    };
};
