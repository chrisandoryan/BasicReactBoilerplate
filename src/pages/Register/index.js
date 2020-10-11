import "react-toastify/dist/ReactToastify.css";
import "./style.scss";

import * as ROUTES from "../../constants/routes";

import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import React, { useState } from "react";

import { TextField } from "@material-ui/core";
import User from "../../models/user";
import { toast } from "react-toastify";
import { withFirebase } from "../../contexts";

function Register(props) {
  const auth = props.firebase.auth;
  const db = props.firebase.db;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth_response) => {
        let uid = auth_response.user.uid;
        let newUser = new User();
        newUser.setRegistrationData(uid, name, email);
        console.log(newUser.getUser());

        db.collection(User.collection)
          .doc(newUser.uid)
          .set(newUser.getUser())
          .then(() => {
            toast.warn("Your account has been created, welcome!");
            props.history.push(ROUTES.LOGIN);
          })
          .catch((err) => {
            //TODO: handle this exception.
            toast.error(err.message);
            console.log(err);
          });
      })
      .catch((error) => {
        //TODO: handle this exception.
        toast.error(error.message);
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <div className="flex-container">
        <Container>
          <Row
            className="align-items-center register-square"
            id="register-section"
          >
            <Col md="8" id="register-art-container">
              <img src="register.webp" id="register-art-img"></img>
            </Col>
            <Col md="4" className="form-wrapper">
              <div>
                <div className="">
                  <Col className="greet-header">
                    <h1>Register Here</h1>
                  </Col>
                </div>
                <div className="align-middle align-items-center justify-content-md-center">
                  <Col>
                    <Form onSubmit={handleRegister} className="form">
                      <Form.Group>
                        <InputGroup className="mb-2">
                          <TextField
                            fullWidth
                            type="text"
                            id="standard-basic"
                            label="Name"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </InputGroup>
                      </Form.Group>
                      <Form.Group>
                        <InputGroup className="mb-2">
                          <TextField
                            fullWidth
                            type="text"
                            id="standard-basic"
                            label="Email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </InputGroup>
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>
                      <Form.Group>
                        <InputGroup className="mb-2">
                          <TextField
                            fullWidth
                            type="password"
                            id="standard-basic"
                            label="Password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </InputGroup>
                      </Form.Group>
                      <Button
                        type="submit"
                        className={"shadow mt-3"}
                        block
                        id="btn-register"
                      >
                        Register
                      </Button>
                      <div className="foot-lnk mt-3">
                        <Link style={{ color: "#343a40" }} to={ROUTES.LOGIN}>
                          Already have an account?
                        </Link>
                      </div>
                    </Form>
                  </Col>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

// Note: kalo mau pake object firebase.auth dan firebase.firestore
// langsung aja lewat this.props.firebase.auth dan this.props.firebase.db
export default withRouter(withFirebase(Register));
