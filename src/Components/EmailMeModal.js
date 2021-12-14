import React, { useState } from "react";
import { Modal, Button, Container, Row, Col, Card } from "react-bootstrap";

const EmailMeModal = ({ showEmail, handleEmailClose }) => {
  const [confirmDialog, setConfirmDialog] = useState(false);

  const handleConfirmDialog = () => setConfirmDialog(!confirmDialog);

  const sendAndClose = () => {
    setConfirmDialog(false);
    handleEmailClose();
  };

  return (
    <div>
      <Modal show={showEmail} onHide={handleEmailClose}>
        {confirmDialog ? (
          <div>
            <Modal.Header closeButton>
              <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col className="alignC">
                  {" "}
                  <Button
                    id="submit_form"
                    variant="outline-success"
                    size="lg"
                    onClick={sendAndClose}
                    type="submit"
                    value="Send"
                  >
                    YES
                  </Button>
                </Col>
                <Col className="alignC">
                  <Button
                    variant="outline-danger"
                    size="lg"
                    onClick={handleConfirmDialog}
                  >
                    NO
                  </Button>
                </Col>
              </Row>
            </Modal.Body>
          </div>
        ) : (
          <div>
            <Modal.Header closeButton>
              <Modal.Title>Email Me!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <form
                    action="https://postmail.invotes.com/send"
                    method="post"
                    id="email_form"
                  ></form>
                  <input type="text" name="subject" placeholder="Subject" />
                </Row>
                <Row>
                  <textarea name="text" placeholder="Message"></textarea>
                  <input
                    type="hidden"
                    name="access_token"
                    value="v1m6bd1xa83bi2m25hyg5yjb"
                  />
                  <input
                    type="hidden"
                    name="success_url"
                    value=".?message=Email+Successfully+Sent%21&isError=0"
                  />
                  <input
                    type="hidden"
                    name="error_url"
                    value=".?message=Email+could+not+be+sent.&isError=1"
                  />
                </Row>
              </Container>
              <Card.Text style={{ fontSize: "12px", color: "red" }}>
                {" "}
                NOTE: This doesn't remember what you wrote (yet!) so don't click
                out!
              </Card.Text>
            </Modal.Body>
            <Modal.Footer>
              {/* add type="submit" value="Send" so it works */}
              <Button
                variant="outline-success"
                id="submit_form"
                onClick={handleConfirmDialog}
              >
                Send?
              </Button>
              <Button variant="outline-danger" onClick={handleEmailClose}>
                Close
              </Button>
            </Modal.Footer>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default EmailMeModal;
