// src/components/checkout/OrderReview/OrderItems.jsx
const OrderItems = ({ items }) => (
    <div className="space-y-2">
        {items.map(item => (
            <div key={item.id} className="flex justify-between rounded border p-2">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        ))}
    </div>
);

export default OrderItems;
