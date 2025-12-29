import React from "react";
import Modal from "./Modal";

const FormModal = ({ isOpen, onClose, title, children }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            {title && <h3 className="mb-4 text-lg font-semibold">{title}</h3>}
            <div>{children}</div>
        </Modal>
    );
};

export default FormModal;
