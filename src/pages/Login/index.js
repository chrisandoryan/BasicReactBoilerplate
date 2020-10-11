import 'react-toastify/dist/ReactToastify.css';
import './style.scss';

import * as ROUTES from '../../constants/routes';

import { AuthContext, withFirebase } from '../../contexts';
import { Button, Col, Container, Form, InputGroup } from 'react-bootstrap';
import { FaRegBuilding, FaWalking } from "react-icons/fa";
import { Link, withRouter } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import { TextField } from '@material-ui/core';
import User from '../../models/user';
import { toast } from 'react-toastify';

function Login(props) {
    const { user, setUser } = useContext(AuthContext);

    const auth = props.firebase.auth;
    const db = props.firebase.db;

    const [roleChosen, setRoleChosen] = useState("User");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth_response) => {
                let auth_user = auth_response.user;
                let designated_collection = roleChosen === "Admin" ? "admins" : "users";

                db.collection(designated_collection)
                    .doc(auth_user.uid)
                    .get()
                    .then((res) => {
                        if (res.exists) {
                            let doc_user = res.data();

                            toast.success("Login success, welcome back!");
                            props.history.push(ROUTES.HOME);
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
                <div>
                    <img src="wave-top.svg" />
                </div>
                <Container>
                    <div className="">
                        <Col className="greet-header">
                            <h1>Welcome!</h1>
                        </Col>
                    </div>
                    <div className="align-middle align-items-center justify-content-md-center">
                        <Col>
                            <Form onSubmit={handleLogin}>
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
                                    <Form.Label className={"mt-2"}>Log me in as {roleChosen} </Form.Label>
                                    <InputGroup className="mb-2 mt-3 justify-content-center">
                                        <ToggleButtonGroup className={"shadow"} value={roleChosen} onChange={handleRolePick} aria-label="text formatting" exclusive>
                                            <ToggleButton value="User">
                                                <FaWalking size={"5em"} />
                                            </ToggleButton>
                                            <ToggleButton value="Admin" className="role-box">
                                                <FaRegBuilding size={"5em"} />
                                            </ToggleButton>
                                        </ToggleButtonGroup>
                                    </InputGroup>
                                </Form.Group>
                                <Button type="submit" className={"shadow mt-4"} block style={{ border: 0, backgroundColor: "#00b0ff", color: "#FFF" }}>
                                    Login
                                </Button>
                                <div className="foot-lnk mt-3">
                                    <Link style={{ color: "#343a40" }} to={ROUTES.REGISTER}>Don't have an account?</Link>
                                </div>
                            </Form>
                        </Col>
                    </div>
                </Container>
                <div>
                    <img src="wave-bottom.svg" />
                </div>
            </div>
        </React.Fragment>
    )
}

// Note: kalo mau pake object firebase.auth dan firebase.firestore
// langsung aja lewat this.props.firebase.auth dan this.props.firebase.db 
export default withRouter(withFirebase(Login));