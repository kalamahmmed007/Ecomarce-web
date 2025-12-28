// src/components/checkout/PaymentMethod/PaymentMethod.jsx
import CardPayment from "./CardPayment";
import MobilePayment from "./MobilePayment";
import CashOnDelivery from "./CashOnDelivery";
import { useState } from "react";

const PaymentMethod = ({ onSelect }) => {
    const [method, setMethod] = useState("");

    const renderPaymentForm = () => {
        if (method === "card") return <CardPayment />;
        if (method === "mobile") return <MobilePayment />;
        if (method === "cod") return <CashOnDelivery />;
        return null;
    };

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Payment Method</h2>
            <div className="flex space-x-4">
                {["card", "mobile", "cod"].map(m => (
                    <button
                        key={m}
                        onClick={() => { setMethod(m); onSelect(m); }}
                        className={`px-4 py-2 border rounded ${method === m ? "border-blue-600 bg-blue-50" : "border-gray-300"}`}
                    >
                        {m === "card" ? "Card" : m === "mobile" ? "Mobile Pay" : "Cash on Delivery"}
                    </button>
                ))}
            </div>
            {renderPaymentForm()}
        </div>
    );
};

export default PaymentMethod;
