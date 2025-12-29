import React from "react";
import Modal from "./Modal";

const ImagePreviewModal = ({ isOpen, onClose, src, alt = "" }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-3xl">
            <img src={src} alt={alt} className="w-full h-auto rounded" />
        </Modal>
    );
};

export default ImagePreviewModal;
