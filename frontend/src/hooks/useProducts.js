import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, setFilters } from "../redux/slices/productSlice";
import { useEffect } from "react";

export const useProducts = (filters = {}) => {
    const dispatch = useDispatch();
    const { products, loading } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProducts(filters));
    }, [filters]);

    const applyFilters = (newFilters) => dispatch(setFilters(newFilters));

    return { products, loading, applyFilters };
};
