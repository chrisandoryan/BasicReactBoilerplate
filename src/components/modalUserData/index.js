import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { AuthContext } from "../../contexts";

function ModalUserData({ onSubmit = () => {}, ...props }) {
  const [formData, setFormData] = useState({});
  const { user } = useContext(AuthContext);

  function onValueChange(value, key) {
    setFormData({
      ...formData,
      [key]: value,
    });
  }

  function onRadioChange(value) {
    setFormData({
      ...formData,
      gender: value,
    });
  }

  return (
    <>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Personal Information</Modal.Title>
        </Modal.Header>
        <Form onSubmit={() => onSubmit(formData)}>
          <Modal.Body>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => onValueChange(e.target.value, "name")}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone"
                onChange={(e) => onValueChange(e.target.value, "phone")}
              />
            </Form.Group>

            <Form.Group controlId="formBasicGender">
              <Form.Label>Gender</Form.Label>
              <Form.Row>
                <Form.Check
                  className="mx-1"
                  type="radio"
                  label="Male"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  onChange={() => onRadioChange("male")}
                />
                <Form.Check
                  className="mx-2"
                  type="radio"
                  label="Female"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  onChange={() => onRadioChange("female")}
                />
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => onValueChange(e.target.value, "dob")}
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default ModalUserData;
