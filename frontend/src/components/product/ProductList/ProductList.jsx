// src/components/product/ProductList/ProductList.jsx
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import ProductCardHorizontal from "../ProductCard/ProductCardHorizontal";
import EmptyState from "../../common/EmptyState/EmptyState";

const ProductList = ({ products = [], view = "grid" }) => {
    if (!products || products.length === 0) {
        return (
            <div className="mt-10">
                <EmptyState message="No products found." />
            </div>
        );
    }

    return (
        <div
            className={`grid gap-6 ${view === "grid"
                    ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    : "grid-cols-1"
                }`}
        >
            {products.map((product) =>
                view === "grid" ? (
                    <ProductCard key={product.id} product={product} />
                ) : (
                    <ProductCardHorizontal key={product.id} product={product} />
                )
            )}
        </div>
    );
};

export default ProductList;
