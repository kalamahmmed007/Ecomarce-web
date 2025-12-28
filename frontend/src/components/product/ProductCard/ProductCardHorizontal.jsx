// src/components/product/ProductCard/ProductCardHorizontal.jsx
import LazyImage from "../../common/Image/LazyImage";
import { Link } from "react-router-dom";

const ProductCardHorizontal = ({ product }) => (
    <Link
        to={`/product/${product.id}`}
        className="flex overflow-hidden rounded-lg bg-white shadow transition hover:shadow-lg"
    >
        <LazyImage
            src={product.image || "/assets/images/placeholder.png"}
            alt={product.name}
            className="h-32 w-32 object-cover"
        />
        <div className="flex flex-col justify-between p-4">
            <h4 className="font-medium text-gray-800">{product.name}</h4>
            <span className="text-gray-600">${product.price.toFixed(2)}</span>
        </div>
    </Link>
);

export default ProductCardHorizontal;
