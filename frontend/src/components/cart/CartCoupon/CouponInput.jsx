// src/components/cart/CartCoupon/CouponInput.jsx
import { useState } from "react";

const CouponInput = ({ applyCoupon }) => {
    const [code, setCode] = useState("");

    const handleApply = () => {
        applyCoupon(code);
        setCode("");
    };

    return (
        <div className="mt-4 flex space-x-2">
            <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Coupon code"
                className="flex-1 rounded border px-2 py-1"
            />
            <button
                onClick={handleApply}
                className="rounded bg-green-600 px-4 py-1 text-white transition hover:bg-green-700"
            >
                Apply
            </button>
        </div>
    );
};

export default CouponInput;
