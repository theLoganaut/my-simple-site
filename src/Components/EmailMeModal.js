import React from "react";
import { Modal, Button } from "react-bootstrap";

const EmailMeModal = ({ showEmail, handleEmailClose }) => {
  return (
    <div>
      <Modal show={showEmail} onHide={handleEmailClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEmailClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EmailMeModal;
