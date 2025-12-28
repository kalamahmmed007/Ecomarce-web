// src/pages/Cart/CartPage.jsx
import React from "react";
import CartDrawer from "../../components/cart/CartDrawer/CartDrawer";

const CartPage = () => {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 py-8">
                <CartDrawer />
            </div>
        </MainLayout>
    );
};

export default CartPage;
