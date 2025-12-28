// src/components/user/Addresses/AddressCard.jsx
const AddressCard = ({ address, onEdit, onDelete }) => (
    <div className="flex items-center justify-between rounded border p-4">
        <div>
            <p className="font-semibold">{address.name}</p>
            <p className="text-gray-500">{address.street}, {address.city}, {address.zip}</p>
            <p>{address.phone}</p>
        </div>
        <div className="space-x-2">
            <button
                onClick={() => onEdit(address)}
                className="rounded bg-blue-600 px-3 py-1 text-white transition hover:bg-blue-700"
            >
                Edit
            </button>
            <button
                onClick={() => onDelete(address.id)}
                className="rounded bg-red-600 px-3 py-1 text-white transition hover:bg-red-700"
            >
                Delete
            </button>
        </div>
    </div>
);

export default AddressCard;
