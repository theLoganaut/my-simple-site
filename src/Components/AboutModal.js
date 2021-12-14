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
          <Card.Text>
            - I look good on a mobile viewing experience too!
          </Card.Text>
          <Card.Text>- All images made by me.</Card.Text>
          <Card.Text>
            - Soon Mailing will be done with an API. So many to chose from
            though.{" "}
          </Card.Text>
          <Card.Text className="alignC">
            {" "}
            Anything I missed? Let me know with an email!{" "}
            <a href="mailto:logan.duncan512@gmail.com">
              logan.duncan512@gmail.com
            </a>{" "}
          </Card.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAboutClose}>
            Close (Onboard me quick before someone gets me first!).
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AboutModal;
