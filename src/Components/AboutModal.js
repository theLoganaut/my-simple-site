import React from "react";
import { Modal, Button, Card } from "react-bootstrap";

const AboutModal = ({ showAbout, handleAboutClose }) => {
  return (
    <div>
      <Modal show={showAbout} onHide={handleAboutClose}>
        <Modal.Header closeButton>
          <Modal.Title> Other non-critical info; </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Text>- React as the framework.</Card.Text>
          <Card.Text>- tsParticles for the falling effect.</Card.Text>
          <Card.Text>- All images made by me.</Card.Text>
        </Modal.Body>
        <Modal.Footer>
          <Card.Text> Anything I missed? Let me know!</Card.Text>
          <Button variant="secondary" onClick={handleAboutClose}>
            Please hire me (Close).
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AboutModal;
