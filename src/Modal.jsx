import React, { useEffect, useRef } from "react";

/**
 * Modal component for displaying a centered popup on the screen.
 *
 * @component
 * @example
 * const [isVisible, setIsVisible] = useState(false);
 *
 * return (
 *   <>
 *     <button onClick={() => setIsVisible(true)}>Show Modal</button>
 *     <Modal isVisible={isVisible} onClose={() => setIsVisible(false)} />
 *   </>
 * );
 *
 * @param {Object} props - The props object.
 * @param {boolean} props.isVisible - Determines if the modal is visible.
 * @param {function} props.onClose - Callback function to handle the modal close action.
 *
 * @returns {JSX.Element|null} The Modal component or null if not visible.
 */
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
      <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
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
