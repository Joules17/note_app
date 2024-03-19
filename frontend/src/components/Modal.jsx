import React from "react";

const Modal = ({ isOpen, children }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
                    <div className="bg-gray-900 bg-opacity-50 fixed top-0 left-0 w-full h-full"></div>
                    <div className="bg-white border border-black rounded-lg p-4 relative pointer-events-auto max-w-[80%]">
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;