// src/components/product/ProductReview/ProductReviews.jsx
import ReviewItem from "./ReviewItem";
import ReviewForm from "./ReviewForm";

const ProductReviews = ({ reviews }) => (
    <div className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold">Reviews</h2>
        <ReviewForm />
        {reviews?.length ? (
            reviews.map((r) => <ReviewItem key={r.id} review={r} />)
        ) : (
            <p className="text-gray-500">No reviews yet.</p>
        )}
    </div>
);

export default ProductReviews;
