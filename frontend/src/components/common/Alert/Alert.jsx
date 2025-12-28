// src/components/common/Alert/Alert.jsx
const Alert = ({ type = "info", message }) => {
    const styles = {
        success: "bg-green-100 text-green-700",
        error: "bg-red-100 text-red-700",
        warning: "bg-yellow-100 text-yellow-700",
        info: "bg-blue-100 text-blue-700",
    };

    return (
        <div className={`rounded-md px-4 py-2 text-sm ${styles[type]}`}>
            {message}
        </div>
    );
};

export default Alert;
