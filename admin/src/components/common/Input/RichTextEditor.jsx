import React from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = ({ value, onChange, placeholder = "Write something...", className = "" }) => {
    return (
        <div className={className}>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="bg-white border border-gray-300 rounded"
            />
        </div>
    );
};

export default RichTextEditor;
