import React, { useEffect, useRef } from "react";
import "./modal.css";

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
 *     <Modal
 *       isVisible={isVisible}
 *       onClose={() => setIsVisible(false)}
 *       title="Custom Title"
 *       message="Custom message goes here."
 *       closeButtonLabel="Dismiss"
 *     />
 *   </>
 * );
 *
 * @param {Object} props - The props object.
 * @param {boolean} props.isVisible - Determines if the modal is visible.
 * @param {function} props.onClose - Callback function to handle the modal close action.
 * @param {string} [props.title] - The title displayed in the modal.
 * @param {string} [props.message] - The message displayed in the modal.
 * @param {string} [props.closeButtonLabel] - The label for the close button.
 *
 * @returns {JSX.Element|null} The Modal component or null if not visible.
 */
export default function Modal({
  isVisible,
  onClose,
  title,
  message,
  closeButtonLabel,
}) {
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
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">{title || "Employee Created"}</h2>
        <p className="modal-message">
          {message || "The employee has been successfully created."}
        </p>
        <button
          onClick={onClose}
          className="modal-close-button"
          data-testid="button-close"
          ref={closeButtonRef}
        >
          {closeButtonLabel || "Close"}
        </button>
      </div>
    </div>
  );
}
