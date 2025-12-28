// src/components/layout/Header/SearchBar.jsx
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../../redux/slices/searchSlice"; // Redux slice
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
    const dispatch = useDispatch();
    const searchQuery = useSelector((state) => state.search.query);

    const handleChange = (e) => {
        dispatch(setSearchQuery(e.target.value));
    };

    return (
        <div className="relative w-full max-w-xs">
            <input
                type="text"
                value={searchQuery}
                onChange={handleChange}
                placeholder="Search products..."
                className="w-full rounded-full border px-3 py-2 pl-9 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <AiOutlineSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        </div>
    );
};

export default SearchBar;
