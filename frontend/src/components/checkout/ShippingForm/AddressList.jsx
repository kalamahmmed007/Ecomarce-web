// src/components/checkout/ShippingForm/AddressList.jsx
const AddressList = ({ addresses, onSelect }) => (
    <div className="space-y-2">
        {addresses.map(addr => (
            <div
                key={addr.id}
                onClick={() => onSelect(addr)}
                className="cursor-pointer rounded border p-3 transition hover:border-blue-600"
            >
                <p>{addr.name}</p>
                <p>{addr.street}, {addr.city}, {addr.zip}</p>
                <p>{addr.phone}</p>
            </div>
        ))}
    </div>
);

export default AddressList;
