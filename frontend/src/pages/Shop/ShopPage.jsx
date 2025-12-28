import React from "react";
import ProductFilter from "../../components/product/ProductFilter/ProductFilter";
import ProductList from "../../components/product/ProductList/ProductList";

const ShopPage = () => (
    <div className="flex flex-col gap-6 md:flex-row">
        <aside className="w-full md:w-1/4">
            <ProductFilter />
        </aside>
        <main className="w-full md:w-3/4">
            <ProductList />
        </main>
    </div>
);

export default ShopPage;
