// src/components/common/Checkbox/Checkbox.jsx
const Checkbox = ({ label, checked, onChange }) => {
    return (
        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
            />
            <span>{label}</span>
        </label>
    );
};

export default Checkbox;
