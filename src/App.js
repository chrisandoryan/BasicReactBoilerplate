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
                <Col md={3} />
                <Col md={4}>
                    <Card
                        className={"shadow rounded p-4"}
                        style={{border: 0}}
                    >
                        <h4 className={"text-center"}>Give your reaction</h4>
                        <div className={"text-center"}>
                            <RiEmotionSadLine style={{fontSize: 40}} className={"text-danger"} />
                            <RiEmotionNormalLine style={{fontSize: 40}} className={"text-muted"} />
                            <RiEmotionLine style={{fontSize: 40}} className={"text-success"}/>
                        </div>
                    </Card>
                </Col>
                <Col md={5} />
            </Row>
        </div>
    );
}

export default App;
