import React from "react";

const FileUpload = ({ onChange, accept = "*", className = "" }) => {
    return (
        <input
            type="file"
            accept={accept}
            onChange={(e) => onChange(e.target.files[0])}
            className={className}
        />
    );
};

export default FileUpload;
