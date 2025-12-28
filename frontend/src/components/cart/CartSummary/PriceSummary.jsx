// src/components/cart/CartSummary/PriceSummary.jsx
const PriceSummary = ({ subtotal, discount, shipping }) => {
    const total = subtotal - (discount || 0) + (shipping || 0);

    return (
        <div className="space-y-2 rounded border p-4">
            <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>
            {discount > 0 && (
                <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                </div>
            )}
            <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping?.toFixed(2) || 0}</span>
            </div>
            <div className="flex justify-between border-t pt-2 text-lg font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default PriceSummary;
