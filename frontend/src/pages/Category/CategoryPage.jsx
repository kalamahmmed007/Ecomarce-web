import React from "react";
import ProductList from "../../components/product/ProductList/ProductList";

const CategoryPage = () => (
    <MainLayout>
        <div className="container mx-auto px-4 py-8">
            <ProductList />
        </div>
    </MainLayout>
);

export default CategoryPage;
