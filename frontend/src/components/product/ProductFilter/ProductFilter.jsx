// src/components/product/ProductFilter/ProductFilter.jsx
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import RatingFilter from "./RatingFilter";

const ProductFilter = () => (
    <aside className="w-full space-y-4 rounded bg-white p-4 shadow md:w-64">
        <PriceFilter />
        <CategoryFilter />
        <BrandFilter />
        <RatingFilter />
    </aside>
);

export default ProductFilter;
