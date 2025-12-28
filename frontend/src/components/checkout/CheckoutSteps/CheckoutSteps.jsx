// src/components/checkout/CheckoutSteps/CheckoutSteps.jsx
import StepIndicator from "./StepIndicator";

const steps = ["Shipping", "Payment", "Review", "Confirmation"];

const CheckoutSteps = ({ currentStep }) => {
    return (
        <div className="mb-6 flex items-center justify-between">
            {steps.map((label, index) => (
                <StepIndicator
                    key={index}
                    step={index + 1}
                    label={label}
                    isActive={currentStep === index + 1}
                    isCompleted={currentStep > index + 1}
                />
            ))}
        </div>
    );
};

export default CheckoutSteps;
