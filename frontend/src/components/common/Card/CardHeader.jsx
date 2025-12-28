// src/components/common/Card/CardHeader.jsx
const CardHeader = ({ title, action }) => {
    return (
        <div className="flex items-center justify-between border-b px-4 py-3">
            <h3 className="text-sm font-semibold">{title}</h3>
            {action}
        </div>
    );
};

export default CardHeader;
