// src/components/user/Orders/OrderHistory.jsx
import OrderCard from "./OrderCard";

const OrderHistory = ({ orders }) => (
    <div className="space-y-4">
        <h2 className="text-2xl font-semibold">My Orders</h2>
        {orders.length ? (
            orders.map(order => <OrderCard key={order.id} order={order} />)
        ) : (
            <p className="text-gray-500">You have no orders yet.</p>
        )}
    </div>
);

export default OrderHistory;
