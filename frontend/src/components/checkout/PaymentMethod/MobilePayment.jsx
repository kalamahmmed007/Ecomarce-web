// src/components/checkout/PaymentMethod/MobilePayment.jsx
const MobilePayment = () => (
    <div className="mt-2 space-y-2">
        <input type="text" placeholder="Mobile Number" className="w-full rounded border px-2 py-1" />
        <input type="text" placeholder="Transaction ID" className="w-full rounded border px-2 py-1" />
    </div>
);

export default MobilePayment;
