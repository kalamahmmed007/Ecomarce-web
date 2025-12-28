// src/components/common/Button/Button.jsx
const Button = ({
    children,
    type = "button",
    variant = "primary",
    size = "md",
    disabled = false,
    className = "",
    onClick,
}) => {
    const base =
        "inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        danger: "bg-red-600 text-white hover:bg-red-700",
        outline:
            "border border-gray-300 text-gray-700 hover:bg-gray-100",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
    };

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
