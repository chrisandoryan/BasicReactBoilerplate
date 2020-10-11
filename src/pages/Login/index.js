import 'react-toastify/dist/ReactToastify.css';
import './style.scss';

import * as ROUTES from '../../constants/routes';

import { AuthContext, withFirebase } from '../../contexts';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { FaChartLine, FaHeadphones, FaRegBuilding, FaWalking } from "react-icons/fa";
import { Link, withRouter } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import { TextField } from '@material-ui/core';
import User from '../../models/user';
import { toast } from 'react-toastify';

// import { }








function Login(props) {
    const { user, setUser } = useContext(AuthContext);

    const auth = props.firebase.auth;
    const db = props.firebase.db;

    const [roleChosen, setRoleChosen] = useState("Attendee");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth_response) => {
                let auth_user = auth_response.user;
                let db_role = roleChosen === "Attendee" ? "user" : "vendor";

                db.collection(User.collection)
                    .doc(auth_user.uid)
                    .get()
                    .then((res) => {
                        if (res.exists) {
                            let doc_user = res.data();
                            if (db_role === doc_user.role) {
                                if (doc_user.role === "user") {
                                    toast.success("Login success, welcome back!");
                                    props.history.push(ROUTES.HOME);
                                }
                                else if (doc_user.role === "vendor") {
                                    toast.success("Welcome to Vendor Analytica.");
                                    props.history.push(ROUTES.VENDOR);
                                }
                            }
                            else {
                                toast.error("Role mismatch, try checking them again.")
                            }
                        }
                        else {
                            toast.error("User account cannot be found.")
                        }
                    })
                    .catch((err) => {
                        //TODO: handle this exception.
                        toast(err);
                    });
            })
            .catch((error) => {
                //TODO: handle this exception.
                toast.error(error.message)
            })
    }

    const handleRolePick = (event, roleChosen) => {
        setRoleChosen(roleChosen);
    }

    return (
        <React.Fragment>
            <div className="flex-container">
                <Container>
                    <Row className="align-items-center login-square" id="login-section">
                        <Col md="4" className="form-wrapper">
                                <div className="">
                                    <Col className="greet-header">
                                        <h1>Login Here</h1>
                                    </Col>
                                </div>
                                <div className="align-middle align-items-center justify-content-md-center">
                                    <Col>
                                        <Form onSubmit={handleLogin} className="form">
                                            <Form.Group>
                                                <InputGroup className="mb-2">
                                                    <TextField fullWidth type="text" id="standard-basic" label="Email" onChange={(e) => setEmail(e.target.value)} />
                                                </InputGroup>
                                                <Form.Text className="text-muted">
                                                    We'll never share your email with anyone else.
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group>
                                                <InputGroup className="mb-2">
                                                    <TextField fullWidth type="password" id="standard-basic" label="Password" onChange={(e) => setPassword(e.target.value)} />
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group>
                                                <InputGroup className="mb-2 mt-3 justify-content-center">
                                                    <ToggleButtonGroup value={roleChosen} onChange={handleRolePick} aria-label="text formatting" exclusive>
                                                    <ToggleButton value="Attendee" className="role-box">
                                                            <FaHeadphones size={"3em"} />
                                                        </ToggleButton>
                                                        <ToggleButton value="Promotor" className="role-box">
                                                            <FaChartLine size={"3em"} />
                                                        </ToggleButton>
                                                    </ToggleButtonGroup>
                                                </InputGroup>
                                            <center><Form.Label className={"mt-2"}><span className="text-muted">Log me in as</span> {roleChosen} </Form.Label></center>
                                            </Form.Group>
                                            <Button type="submit" className={"shadow"} id="btn-login" block>
                                                Login
                                            </Button>
                                            <div className="foot-lnk mt-3">
                                                <Link style={{ color: "#343a40" }} to={ROUTES.REGISTER}>Don't have an account?</Link>
                                            </div>
                                        </Form>
                                    </Col>
                                </div>
                        </Col>
                        <Col md="8" id="login-art-container">
                            <img src="login.webp" id="login-art-img"></img>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

// Note: kalo mau pake object firebase.auth dan firebase.firestore
// langsung aja lewat this.props.firebase.auth dan this.props.firebase.db 
export default withRouter(withFirebase(Login));