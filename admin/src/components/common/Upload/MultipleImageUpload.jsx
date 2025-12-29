import React from "react";

const MultipleImageUpload = ({ onChange, accept = "image/*", className = "" }) => {
    return (
        <input
            type="file"
            accept={accept}
            multiple
            onChange={(e) => onChange([...e.target.files])}
            className={className}
        />
    );
};

export default MultipleImageUpload;
