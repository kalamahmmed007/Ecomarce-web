import React from "react";
import Modal from "./Modal";
import Button from "../Button/Button";

const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h3 className="mb-2 text-lg font-semibold">{title}</h3>
            <p className="mb-4 text-gray-700">{message}</p>
            <div className="flex justify-end space-x-2">
                <Button variant="secondary" onClick={onClose}>Cancel</Button>
                <Button variant="danger" onClick={onConfirm}>Confirm</Button>
            </div>
        </Modal>
    );
};

export default ConfirmModal;
