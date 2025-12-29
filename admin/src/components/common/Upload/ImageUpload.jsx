import React from "react";

const ImageUpload = ({ onChange, accept = "image/*", className = "" }) => {
    return (
        <input
            type="file"
            accept={accept}
            onChange={(e) => onChange(e.target.files[0])}
            className={className}
        />
    );
};

export default ImageUpload;
