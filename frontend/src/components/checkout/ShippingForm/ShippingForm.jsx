// src/components/checkout/ShippingForm/ShippingForm.jsx
import AddressList from "./AddressList";
import AddressForm from "./AddressForm";

const ShippingForm = ({ addresses, onAddAddress, onSelectAddress }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Shipping Address</h2>
            <AddressList addresses={addresses} onSelect={onSelectAddress} />
            <AddressForm onSubmit={onAddAddress} />
        </div>
    );
};

export default ShippingForm;
