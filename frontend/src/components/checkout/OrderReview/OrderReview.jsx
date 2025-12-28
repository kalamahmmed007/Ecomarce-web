// src/components/checkout/OrderReview/OrderReview.jsx
import OrderItems from "./OrderItems";

const OrderReview = ({ items, total }) => (
    <div className="space-y-4">
        <h2 className="text-xl font-semibold">Review Your Order</h2>
        <OrderItems items={items} />
        <div className="flex justify-between border-t pt-2 text-lg font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
        </div>
    </div>
);

export default OrderReview;
