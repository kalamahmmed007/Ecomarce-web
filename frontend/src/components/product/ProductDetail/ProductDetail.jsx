// src/components/product/ProductDetail/ProductDetail.jsx
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import ProductDescription from "./ProductDescription";
import ProductSpecifications from "./ProductSpecifications";
import ProductVariants from "./ProductVariants";

const ProductDetail = ({ product }) => {
    if (!product) return <p className="text-center">Product not found.</p>;

    return (
        <div className="container mx-auto grid gap-8 px-4 py-8 md:grid-cols-2">
            <ProductImages images={product.images} />
            <div className="space-y-4">
                <ProductInfo product={product} />
                <ProductVariants variants={product.variants} />
                <ProductDescription description={product.description} />
                <ProductSpecifications specifications={product.specifications} />
            </div>
        </div>
    );
};

export default ProductDetail;
