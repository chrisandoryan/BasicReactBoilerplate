import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Col, Container, Row} from "react-bootstrap";
import {RiEmotionLine, RiEmotionNormalLine, RiEmotionSadLine} from "react-icons/ri";
import Button from "@material-ui/core/Button";
import "./App.css";

import "swiper/swiper.scss";

function App() {
    return (
        <div>
            <iframe className={"game-frame"} src="https://gather.town/app/J5KcIR6M7dQr6YYH/BlankPink" frameBorder="0"/>
            <Row className={"fixed-bottom"}>
                <Col md={4} />
                <Col md={3}>
                    <Card
                        className={"shadow-lg rounded p-4"}
                        style={{border: 0, backgroundImage: "linear-gradient(to right, #8400E2 0%, #bf4dcd 100%)"}}
                    >
                        <h4 className={"text-center text-white"}>Give your reaction</h4>
                        <Card className={"shadow-lg mt-2"} style={{borderRadius: 25, border: 0}}>
                            <div className={"text-center p-1"}>
                                <RiEmotionSadLine style={{fontSize: 40}} className={"text-danger"} />
                                <RiEmotionNormalLine style={{fontSize: 40}} className={"text-muted"} />
                                <RiEmotionLine style={{fontSize: 40}} className={"text-success"}/>
                            </div>
                        </Card>
                    </Card>
                </Col>
                <Col md={5} />
            </Row>
        </div>
    );
}

export default App;
