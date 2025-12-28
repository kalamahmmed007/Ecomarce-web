// src/components/user/Addresses/AddressBook.jsx
import AddressCard from "./AddressCard";

const AddressBook = ({ addresses, onEdit, onDelete }) => (
    <div className="space-y-4">
        <h2 className="text-2xl font-semibold">My Addresses</h2>
        {addresses.length ? (
            addresses.map(addr => (
                <AddressCard key={addr.id} address={addr} onEdit={onEdit} onDelete={onDelete} />
            ))
        ) : (
            <p className="text-gray-500">No addresses found.</p>
        )}
    </div>
);

export default AddressBook;
