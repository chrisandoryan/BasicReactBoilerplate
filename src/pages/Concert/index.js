import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import "swiper/swiper.scss";

import { Card, Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { RiEmotionLine, RiEmotionNormalLine, RiEmotionSadLine } from "react-icons/ri";
import { getEventData, sendReaction } from "../../services/event";

import Button from "@material-ui/core/Button";
import Event from "../../models/event";
import Splash from "../../components/Splash";
import { motion } from "framer-motion";

function Concert(props) {

    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isReacted, setIsReacted] = useState(false);

    const iframe = React.createRef();

    const id = props.match.params.id;

    const handleReaction = (emotCode) => {
        sendReaction(emotCode, id)
            .then(() => {
                // setIsReacted(true); // Uncomment to limit reaction attempt.
            });
    }

    const loadEvent = () => {
        getEventData(id)
            .then((doc) => {
                if (doc.exists) {
                    let concert = new Event();
                    concert.setDocToObject(doc.data());
                    setEvent(concert);
                    setLoading(false);
                }
            });
    }

    const handleFrameLoading = () => {
        setLoading(false);
    }

    useEffect(() => {
        loadEvent();
    }, event);

    return (
        <div>
            {
                loading ? (
                    <Splash></Splash>
                ) : (
                        <Row className={"fixed-bottom"}>
                            <Col ref={iframe} md={8}>
                                <iframe className={"game-frame"} src={event?.concert_link} frameBorder="0" onL={handleFrameLoading} />
                            </Col>
                            <Col md={2}>
                                <Card
                                    className={"shadow-lg rounded p-4"}
                                    style={{ border: 0, backgroundImage: "linear-gradient(to right, #8400E2 0%, #bf4dcd 100%)" }}
                                >
                                    <h4 className={"text-center text-white"}>Give your reaction</h4>
                                    <Card className={"shadow-lg mt-2"} style={{ borderRadius: 25, border: 0 }}>
                                        <div className={"text-center p-1"}>
                                            {
                                                !isReacted ? (
                                                    <React.Fragment>
                                                        <RiEmotionSadLine style={{ fontSize: 40 }} className={"text-danger"} onClick={() => handleReaction("1")}/>
                                                        <RiEmotionNormalLine style={{ fontSize: 40 }} className={"text-muted"} onClick={() => handleReaction("2")}/>
                                                        <RiEmotionLine style={{ fontSize: 40 }} className={"text-success"} onClick={() => handleReaction("3")}/>
                                                    </React.Fragment>
                                                ) : (
                                                        <h3>Thankies!</h3>
                                                    )
                                            }
                                        </div>
                                    </Card>
                                </Card>
                            </Col>
                        </Row>
                    )
            }
        </div>
    );
}

export default Concert;
