import { useSelector, useDispatch } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../redux/slices/wishlistSlice";

export const useWishlist = () => {
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.wishlist);

    return {
        items,
        addToWishlist: (product) => dispatch(addToWishlist(product)),
        removeFromWishlist: (id) => dispatch(removeFromWishlist(id)),
        isInWishlist: (id) => items.some(item => item.id === id),
    };
};
