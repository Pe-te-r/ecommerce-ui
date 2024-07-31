// Modal.jsx
import React from "react";
import InputDiv from "../../components/InputDiv";
import { CircleX, Send } from "lucide-react";
const Modal = ({ isOpen, onClose, onSubmit, formData, handleChange,isLoading, isEditing}: any) => {
    if (!isOpen) return null;

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="relative bg-gray-300 w-1/2  h-1/3 p-8 rounded-md shadow-lg z-10">
                <h2 className="text-2xl mb-4 text-center font-mono font-bold">{isEditing? "Edit" : "Add"} Location</h2>
                <form onSubmit={handleFormSubmit}>
                    <InputDiv label="Name" type="text" name="name" value={formData.name} onChange={handleChange} />
                    <div className="flex justify-end items-center gap-4 mt-10">
                        <button type="button" onClick={onClose} className="btn btn-secondary !px-7"><CircleX /></button>
                        <button type="submit" className="btn btn-primary !px-7">{isLoading ?<span className="loading loading-spinner loading-sm"></span> : <Send />}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
