// src/components/user/Orders/OrderDetails.jsx
import OrderTracking from "./OrderTracking";

const OrderDetails = ({ order }) => (
    <div className="space-y-4 rounded bg-white p-6 shadow">
        <h2 className="text-2xl font-semibold">Order #{order.id}</h2>
        <OrderTracking status={order.status} />
        <div className="space-y-2">
            {order.items.map(item => (
                <div key={item.id} className="flex justify-between border-b py-2">
                    <span>{item.name} x {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            ))}
        </div>
        <div className="flex justify-end text-lg font-semibold">
            Total: ${order.total.toFixed(2)}
        </div>
    </div>
);

export default OrderDetails;
