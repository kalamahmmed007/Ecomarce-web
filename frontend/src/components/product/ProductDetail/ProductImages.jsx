// src/components/product/ProductDetail/ProductImages.jsx
import LazyImage from "../../common/Image/LazyImage";

const ProductImages = ({ images }) => {
    if (!images?.length) return null;

    return (
        <div className="space-y-2">
            <LazyImage
                src={images[0]}
                alt="Main product"
                className="h-96 w-full rounded-lg object-cover"
            />
            <div className="grid grid-cols-4 gap-2">
                {images.map((img, idx) => (
                    <LazyImage
                        key={idx}
                        src={img}
                        alt={`Product ${idx}`}
                        className="h-20 w-full cursor-pointer rounded-lg object-cover"
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductImages;
