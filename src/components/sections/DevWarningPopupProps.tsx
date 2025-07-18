import React, { useState, useEffect } from "react";

interface DevWarningPopupProps {
  onClose?: () => void;
}

const DevWarningPopup: React.FC<DevWarningPopupProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenWarning = localStorage.getItem("dev-warning-seen");

    if (!hasSeenWarning) {
      setIsVisible(true);
    }
  }, []);

  const handleContinue = (): void => {
    // Mark as seen and hide popup
    localStorage.setItem("dev-warning-seen", "true");
    setIsVisible(false);

    // Call optional callback
    if (onClose) {
      onClose();
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <h2>⚠️ Development Notice</h2>
        </div>

        <div className="popup-body">
          <p>
            This website is currently under development. Please note that the
            data displayed may be incorrect, incomplete, or subject to change.
          </p>
          <p>Use this site for testing purposes only.</p>
        </div>

        <div className="popup-footer">
          <button
            onClick={handleContinue}
            className="continue-button"
            type="button"
          >
            Continue to Website
          </button>
        </div>
      </div>

      <style>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .popup-content {
          background: white;
          border-radius: 8px;
          padding: 0;
          max-width: 500px;
          width: 90%;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          animation: slideIn 0.3s ease-out;
        }

        .popup-header {
          background:rgb(35, 0, 48);
          color: white;
          padding: 20px;
          border-radius: 8px 8px 0 0;
          text-align: center;
        }

        .popup-header h2 {
          margin: 0;
          font-size: 1.5em;
        }

        .popup-body {
          padding: 20px;
          color: #333;
          line-height: 1.6;
        }

        .popup-body p {
          margin: 0 0 15px 0;
        }

        .popup-body p:last-child {
          margin-bottom: 0;
        }

        .popup-footer {
          padding: 20px;
          text-align: center;
          border-top: 1px solid #eee;
        }

        .continue-button {
          background:rgb(100, 100, 100);
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 500;
          transition: background-color 0.2s;
        }

        .continue-button:hover {
          background:rgb(0, 2, 3);
        }

        .continue-button:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
        }

        @keyframes slideIn {
          from {
            transform: translateY(-50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 600px) {
          .popup-content {
            width: 95%;
          }

          .popup-header,
          .popup-body,
          .popup-footer {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default DevWarningPopup;
