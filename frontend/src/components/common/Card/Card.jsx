// src/components/common/Card/Card.jsx
const Card = ({ children, className = "" }) => {
    return (
        <div className={`rounded-lg bg-white shadow ${className}`}>
            {children}
        </div>
    );
};

export default Card;
