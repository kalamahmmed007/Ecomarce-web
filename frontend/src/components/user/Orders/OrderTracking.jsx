// src/components/user/Orders/OrderTracking.jsx
const OrderTracking = ({ status }) => {
    const steps = ["Pending", "Processing", "Shipped", "Delivered"];

    return (
        <div className="mb-4 flex items-center space-x-2">
            {steps.map((step, idx) => (
                <div key={idx} className="flex flex-1 flex-col items-center">
                    <div
                        className={`w-6 h-6 rounded-full mb-1 ${steps.indexOf(status) >= idx ? "bg-green-600" : "bg-gray-300"
                            }`}
                    />
                    <span className="text-xs text-gray-700">{step}</span>
                </div>
            ))}
        </div>
    );
};

export default OrderTracking;
