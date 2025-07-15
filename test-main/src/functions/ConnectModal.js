// Modal.js
import React from 'react';
import '../css/styles.css'; // Assume this is where your modal styles are located

const ConnectModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default ConnectModal;
