// src/components/product/ProductCard/ProductCard.jsx
import { Link } from "react-router-dom";
import LazyImage from "../../common/Image/LazyImage";

const ProductCard = ({ product }) => {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
            <Link to={`/product/${product.id}`}>
                <LazyImage
                    src={product.image || "/assets/images/placeholder.png"}
                    alt={product.name}
                    className="h-48 w-full object-cover"
                />
                <div className="p-4">
                    <h3 className="font-semibold text-gray-800">{product.name}</h3>
                    <p className="mt-1 text-gray-600">${product.price.toFixed(2)}</p>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
