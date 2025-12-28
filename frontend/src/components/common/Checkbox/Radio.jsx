// src/components/common/Checkbox/Radio.jsx
const Radio = ({ label, name, checked, onChange, value }) => {
    return (
        <label className="inline-flex items-center space-x-2 text-sm text-gray-700">
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={(e) => onChange(e.target.value)}
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
            />
            <span>{label}</span>
        </label>
    );
};

export default Radio;
