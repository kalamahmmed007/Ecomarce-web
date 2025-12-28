// src/components/checkout/CheckoutSteps/StepIndicator.jsx
const StepIndicator = ({ step, label, isActive, isCompleted }) => {
    return (
        <div className="flex flex-1 flex-col items-center">
            <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-2
          ${isCompleted ? "bg-green-600 text-white" : isActive ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"}`}
            >
                {step}
            </div>
            <span className={`text-sm ${isActive ? "text-blue-600" : isCompleted ? "text-green-600" : "text-gray-500"}`}>
                {label}
            </span>
        </div>
    );
};

export default StepIndicator;
