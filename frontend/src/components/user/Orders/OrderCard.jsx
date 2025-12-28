// src/components/user/Orders/OrderCard.jsx
import { Link } from "react-router-dom";

const OrderCard = ({ order }) => (
    <div className="flex items-center justify-between rounded border p-4">
        <div>
            <p className="font-semibold">Order #{order.id}</p>
            <p className="text-gray-500">{order.date}</p>
            <p>Total: ${order.total.toFixed(2)}</p>
        </div>
        <Link
            to={`/orders/${order.id}`}
            className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
        >
            View Details
        </Link>
    </div>
);

export default OrderCard;
