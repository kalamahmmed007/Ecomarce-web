// src/components/checkout/OrderConfirmation/OrderConfirmation.jsx
const OrderConfirmation = ({ order }) => (
    <div className="space-y-4 p-8 text-center">
        <h2 className="text-2xl font-semibold">Thank you for your order!</h2>
        <p>Your order #{order.id} has been successfully placed.</p>
        <p>We’ve sent a confirmation to {order.email}.</p>
    </div>
);

export default OrderConfirmation;
