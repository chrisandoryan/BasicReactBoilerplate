import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper.scss";

import {Card, Col, Container, Row} from "react-bootstrap";
import {Swiper, SwiperSlide} from "swiper/react";

import {BiDollarCircle} from "react-icons/bi";
import Button from "@material-ui/core/Button";
import {GiMicrophone} from "react-icons/gi";
import {MdKeyboardArrowRight} from "react-icons/md";
import React, {useEffect, useState} from "react";
import {RiArrowDownSLine} from "react-icons/ri";
import {withFirebase} from "../../contexts";
import {withRouter} from "react-router-dom";

function Home(props) {

    const db = props.firebase.db;
    const [events, setEvents] = useState([]);
    const [myEvents, setMyEvents] = useState([]);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const fetchEvent = (e) => {
        const data = []
        db.collection("events")
            .get()
            .then((events) => {
                events.forEach((event) => {
                    let dataEvent = event.data()
                    dataEvent.id = event.id
                    dataEvent.artists = dataEvent.artists.join(", ")

                    const eventStartDate = dataEvent.start_time.toDate()
                    dataEvent.startHours = eventStartDate.getHours()
                    dataEvent.startMinutes = '0' + (eventStartDate.getMinutes()).toString().slice(-2)
                    dataEvent.startDate = eventStartDate.getDate()
                    dataEvent.startMonth = monthNames[eventStartDate.getMonth()]

                    const eventEndDate = dataEvent.end_time.toDate()
                    dataEvent.endHours = eventEndDate.getHours()
                    dataEvent.endMinutes = '0' + (eventEndDate.getMinutes()).toString().slice(-2)
                    dataEvent.endDate = eventEndDate.getDate()
                    dataEvent.endMonth = monthNames[eventEndDate.getMonth()]

                    data.push(dataEvent)
                })
                setEvents(data)
            })
    }

    const fetchMyEvent = (e) => {
        const sampleUserId = "LjobinjsrgVGQWXVGbg0lcgGapB3"
        let data = []

        db.collection("users")
            .doc(sampleUserId)
            .collection("tickets")
            .get()
            .then((events) => {

                events.forEach((event) => {
                    let dataEvent = event.data()
                    dataEvent.id = event.id

                    dataEvent.event_ref.get().then((myEvent) => {
                        let dataMyEvent = myEvent.data()
                        dataMyEvent.id = myEvent.id
                        dataMyEvent.artists = dataMyEvent.artists.join(", ")

                        const eventStartDate = dataMyEvent.start_time.toDate()
                        dataMyEvent.startDate = eventStartDate.getDate()
                        dataMyEvent.startMonth = monthNames[eventStartDate.getMonth()]

                        const eventEndDate = dataMyEvent.end_time.toDate()
                        dataMyEvent.endDate = eventEndDate.getDate()
                        dataMyEvent.endMonth = monthNames[eventEndDate.getMonth()]

                        console.log(myEvents)
                        data = [...data, dataMyEvent]
                        setMyEvents(data)
                    })
                })
            })
    }

    useEffect(() => {
        fetchMyEvent()
        fetchEvent()
    }, [])

    return (
        <div>
            {/* Start of Banner */}
            <Swiper spaceBetween={20} slidesPerView={1.15} className={"mt-4"}>
                {events.map((event, idx) => {
                    return (
                        <SwiperSlide key={event.id}>
                            <Card
                                className={"shadow ml-4 mb-5 rounded"}
                                style={{
                                    height: 500,
                                    border: 0,
                                    backgroundImage:
                                        "url(" + event.image_path + ")",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center center",
                                }}
                            >
                                <Row
                                    className={idx === 0 ? "ml-4" : null}
                                    style={{marginTop: "auto", marginBottom: "auto"}}
                                >
                                    <Card.Body>
                                        <Card.Title
                                            className={"text-white font-weight-bold"}
                                            style={{fontSize: 50}}
                                        >
                                            {event.name}
                                        </Card.Title>
                                        <Card.Text>
                                            <h4 className={"text-white"}>{event.startMonth} {event.startDate} - {event.endMonth} {event.endDate}</h4>
                                        </Card.Text>
                                        <div>
                                            <BiDollarCircle style={{color: "#FFF"}}/>{" "}
                                            <span style={{fontSize: 14, color: "#FFF"}}>Rp{event.price}</span>
                                        </div>
                                        <Button
                                            className={"mt-3"}
                                            variant="contained"
                                            style={{backgroundColor: "#8400E2", color: "#FFF"}}
                                        >
                                            Buy Ticket
                                        </Button>
                                    </Card.Body>
                                </Row>
                            </Card>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            {/* End of Banner */}
            <Container>
                {/* Start of My Events */}
                <h3 className={"font-weight-bold"}>My events</h3>
                <Row>
                    {/* Start of My Event Item */}
                    {myEvents.slice(0, 3).map((event, idx) => {
                        return (
                            <Col md={4} key={idx}>
                                <Card
                                    className={"shadow mt-2 rounded"}
                                    style={{
                                        border: 0,
                                        backgroundImage:
                                            "url(" + event.image_path + ")",
                                        backgroundSize: "cover",
                                    }}
                                >
                                    <Row className={"mt-4 pl-3 pr-3"}>
                                        <Col md={10}>
                                            <h5 className={"font-weight-bold text-white"}>
                                                {event.name}
                                            </h5>
                                            <p className={"text-white"}>{event.startMonth} {event.startDate} - {event.endMonth} {event.endDate} </p>
                                        </Col>
                                    </Row>
                                </Card>
                                {idx === 2 ? (
                                    <p className={"mt-3 text-right"}>
                                        Show me more <MdKeyboardArrowRight/>
                                    </p>
                                ) : null }
                            </Col>
                        )
                    })}
                    {/* End of My Event Item */}
                </Row>
                {/* End of My Events */}

                {/* Start of 3 Highlight */}
                <h3 className={"font-weight-bold mt-4"}>Explore events</h3>
                <Row>
                    <Col md={4}>
                        <Card
                            className={"shadow mt-2 p-3 rounded"}
                            style={{
                                border: 0,
                                backgroundImage: "url(img2.png)",
                                backgroundSize: "contain",
                            }}
                        >
                            <Row>
                                <Col md={6}>
                                    <h5 className={"font-weight-bold text-white mb-0 mt-2"}>
                                        Top summer music festivals 2020
                                    </h5>
                                    <p
                                        style={{fontSize: 16}}
                                        className={"text-light mb-0 mt-1"}
                                    >
                                        16 events
                                    </p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card
                            className={"shadow mt-2 p-3 rounded"}
                            style={{
                                border: 0,
                                backgroundImage: "url(img2.png)",
                                backgroundSize: "contain",
                            }}
                        >
                            <Row>
                                <Col md={6}>
                                    <h5 className={"font-weight-bold text-white mb-0 mt-2"}>
                                        Top summer music festivals 2020
                                    </h5>
                                    <p
                                        style={{fontSize: 16}}
                                        className={"text-light mb-0 mt-1"}
                                    >
                                        16 events
                                    </p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card
                            className={"shadow mt-2 p-3 rounded"}
                            style={{
                                border: 0,
                                backgroundImage: "url(img2.png)",
                                backgroundSize: "contain",
                            }}
                        >
                            <Row>
                                <Col md={6}>
                                    <h5 className={"font-weight-bold text-white mb-0 mt-2"}>
                                        Top summer music festivals 2020
                                    </h5>
                                    <p
                                        style={{fontSize: 16}}
                                        className={"text-light mb-0 mt-1"}
                                    >
                                        16 events
                                    </p>
                                </Col>
                            </Row>
                        </Card>
                        <p className={"mt-3 text-right"}>
                            Show me more <MdKeyboardArrowRight/>
                        </p>
                    </Col>
                </Row>
                {/* End of 3 Highlight */}

                {/* Start of Filter Date */}
                <Row style={{marginTop: 20}}>
                    <Col md={4}>
                        <h3 className={"font-weight-bold"}>Popular upcoming events</h3>
                    </Col>
                    <Card
                        className={"shadow-sm text-center p-2"}
                        style={{
                            border: "1px solid #edf1f4",
                            borderRadius: 25,
                        }}
                    >
                        <Row>
                            <Col md={12}>
                <span style={{color: "#3b3c3e"}}>
                  Select Date <RiArrowDownSLine/>
                </span>
                            </Col>
                        </Row>
                    </Card>
                    <Card
                        className={"shadow-sm ml-3 text-center p-2"}
                        style={{
                            border: "1px solid #edf1f4",
                            borderRadius: 25,
                        }}
                    >
                        <Row>
                            <Col md={12}>
                                <span style={{color: "#3b3c3e"}}>Today</span>
                            </Col>
                        </Row>
                    </Card>
                    <Card
                        className={"shadow-sm ml-3 text-center p-2"}
                        style={{
                            border: "1px solid #edf1f4",
                            borderRadius: 25,
                        }}
                    >
                        <Row>
                            <Col md={12}>
                                <span style={{color: "#3b3c3e"}}>Tomorrow</span>
                            </Col>
                        </Row>
                    </Card>
                    <Card
                        className={"shadow-sm ml-3 text-center p-2"}
                        style={{
                            border: "1px solid #edf1f4",
                            borderRadius: 25,
                        }}
                    >
                        <Row>
                            <Col md={12}>
                                <span style={{color: "#3b3c3e"}}>Weekend</span>
                            </Col>
                        </Row>
                    </Card>
                </Row>
                {/* End of Filter Date */}

                {/* Start of Event List */}
                <Row className={"mt-4 mb-4"}>
                    {/* Start of Event Item */}
                    {events.map((event) => {
                        return (
                            <Col md={4} key={event.id}>
                                <Card
                                    className={"shadow rounded"}
                                    style={{
                                        border: 0,
                                    }}
                                >
                                    <Card.Img
                                        variant={"top"}
                                        src={event.image_path}
                                    />
                                    <Card.Body>
                                        <Card.Title>{event.name}</Card.Title>
                                        <Card.Text>
                                            {/*<div>{event.start_time}</div>*/}
                                            <div>{event.startMonth} {event.startDate} - {event.endMonth} {event.endDate} at {event.startHours}:{event.startMinutes} - {event.endHours}:{event.endMinutes}</div>
                                            <div className={"mt-3"}>
                                                <GiMicrophone style={{color: "#6000D4"}}/>{" "}
                                                <span style={{fontSize: 14}}>{event.artists}</span>
                                            </div>
                                            <div>
                                                <BiDollarCircle style={{color: "#6000D4"}}/>{" "}
                                                <span style={{fontSize: 14}}>Rp{event.price}</span>
                                            </div>
                                        </Card.Text>
                                        <Button
                                            variant="contained"
                                            style={{backgroundColor: "#8400E2", color: "#FFF"}}
                                        >
                                            Buy Ticket
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                    {/* End of Event Item */}
                </Row>
                {/* End of Event List */}
            </Container>
        </div>
    );
}

export default withRouter(withFirebase(Home));
