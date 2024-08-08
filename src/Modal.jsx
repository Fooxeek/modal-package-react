import React, { useEffect, useRef } from "react";

export default function Modal({ isVisible, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isVisible && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Employee Created</h2>
        <p>The employee has been successfully created.</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-lime-600 text-white rounded hover:bg-lime-800"
          data-testid="button-close"
          ref={closeButtonRef}
        >
          Close
        </button>
      </div>
    </div>
  );
}
