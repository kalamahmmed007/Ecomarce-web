// src/components/common/EmptyState/EmptyState.jsx
const EmptyState = ({ message = "Nothing here yet!", icon }) => {
    return (
        <div className="flex flex-col items-center justify-center py-12 text-center">
            {icon && <div className="mb-4 text-gray-400">{icon}</div>}
            <p className="text-sm text-gray-500">{message}</p>
        </div>
    );
};

export default EmptyState;
