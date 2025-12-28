const ProductCardSkeleton = () => (
    <div className="h-64 w-full animate-pulse rounded-lg bg-white">
        <div className="h-48 bg-gray-200"></div>
        <div className="space-y-2 p-4">
            <div className="h-4 w-3/4 rounded bg-gray-200"></div>
            <div className="h-4 w-1/2 rounded bg-gray-200"></div>
        </div>
    </div>
);

export default ProductCardSkeleton;
