// src/components/checkout/PaymentMethod/CardPayment.jsx
const CardPayment = () => (
    <div className="mt-2 space-y-2">
        <input type="text" placeholder="Card Number" className="w-full rounded border px-2 py-1" />
        <input type="text" placeholder="MM/YY" className="w-1/2 rounded border px-2 py-1" />
        <input type="text" placeholder="CVV" className="w-1/2 rounded border px-2 py-1" />
    </div>
);

export default CardPayment;
