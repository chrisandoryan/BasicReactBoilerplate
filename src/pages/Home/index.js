import "bootstrap/dist/css/bootstrap.min.css";

import { Card, Col, Container, Row, Button, Navbar } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import NumberFormat from "react-number-format";

import { BiDollarCircle } from "react-icons/bi";
import { GiMicrophone } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";
import React, { useContext, useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { AuthContext, withFirebase } from "../../contexts";
import { Link, useHistory, withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import ModalUserData from "../../components/modalUserData";

function Home(props) {
  const db = props.firebase.db;
  const [events, setEvents] = useState([]);
  const [myEvents, setMyEvents] = useState([]);
  const [show, setShow] = useState(false);
  const [link, setLink] = useState("");
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const fetchEvent = (e) => {
    const data = [];
    db.collection("events")
      .get()
      .then((events) => {
        events.forEach((event) => {
          let dataEvent = event.data();
          dataEvent.id = event.id;
          dataEvent.artists = dataEvent.artists.join(", ");

          const eventStartDate = dataEvent.start_time.toDate();
          dataEvent.startHours = eventStartDate.getHours();
          dataEvent.startMinutes =
            "0" + eventStartDate.getMinutes().toString().slice(-2);
          dataEvent.startDate = eventStartDate.getDate();
          dataEvent.startMonth = monthNames[eventStartDate.getMonth()];

          const eventEndDate = dataEvent.end_time.toDate();
          dataEvent.endHours = eventEndDate.getHours();
          dataEvent.endMinutes =
            "0" + eventEndDate.getMinutes().toString().slice(-2);
          dataEvent.endDate = eventEndDate.getDate();
          dataEvent.endMonth = monthNames[eventEndDate.getMonth()];

          data.push(dataEvent);
        });
        setEvents(data);
      });
  };

  const fetchMyEvent = (e) => {
    const userId = user.uid;
    let data = [];

    db.collection("users")
      .doc(userId)
      .collection("tickets")
      .get()
      .then((events) => {
        events.forEach((event) => {
          let dataEvent = event.data();
          dataEvent.id = event.id;

          dataEvent.event_ref.get().then((myEvent) => {
            let dataMyEvent = myEvent.data();
            dataMyEvent.id = myEvent.id;
            dataMyEvent.artists = dataMyEvent.artists.join(", ");

            const eventStartDate = dataMyEvent.start_time.toDate();
            dataMyEvent.startDate = eventStartDate.getDate();
            dataMyEvent.startMonth = monthNames[eventStartDate.getMonth()];

            const eventEndDate = dataMyEvent.end_time.toDate();
            dataMyEvent.endDate = eventEndDate.getDate();
            dataMyEvent.endMonth = monthNames[eventEndDate.getMonth()];

            console.log(myEvents);
            data = [...data, dataMyEvent];
            setMyEvents(data);
          });
        });
      });
  };

  useEffect(() => {
    if (user != null) {
      fetchMyEvent();
    }
    fetchEvent();
  }, [user]);

  function handleBuyTicket(id) {
    setLink(id);
    if (!user.isFilled) {
      setShow(true);
    } else {
      history.push(`concert/${id}`);
    }
  }

  async function handleSubmit(data) {
    // console.log(data);
    data["role"] = "user";
    data["isFilled"] = true;
    data["uid"] = user.uid;
    await db.collection("users").doc(user.uid).update(data);
    setShow(false);
    history.push(`concert/${link}`);
  }

  return (
    <div>
      {/* Start of Nav*/}
      <Navbar className={"ml-3 mt-3"}>
        <Navbar.Brand href="#home">Gather Fest</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user != null ? (
            <Navbar.Text>
              Signed in as: <a href="#">{user.name}</a>
            </Navbar.Text>
          ) : (
            <span>
              <Navbar.Text>
                <Link className={"ml-3 text-dark"} to={ROUTES.LOGIN}>
                  Login
                </Link>
              </Navbar.Text>
              <Navbar.Text>
                <Link className={"ml-3 text-dark"} to={ROUTES.REGISTER}>
                  Register
                </Link>
              </Navbar.Text>
            </span>
          )}
        </Navbar.Collapse>
      </Navbar>
      {/* End of Nav*/}

      {/* Start of Banner */}
      <Swiper spaceBetween={20} slidesPerView={1.15} className={"mt-3"}>
        <SwiperSlide>
          <Card
            className={"shadow ml-4 mb-5 rounded"}
            style={{
              height: 500,
              border: 0,
              backgroundImage:
                "url(https://weraveyou.com/wp-content/uploads/2020/07/Ed2A3f0WsAEUZEy-e1599492682798.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <Row
              className={"ml-4"}
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <Card.Body>
                <Card.Title
                  className={"text-white font-weight-bold text-left"}
                  style={{ fontSize: 50 }}
                >
                  Tomorrowland
                </Card.Title>
                <Card.Text>
                  <h4 className={"text-white"}>October 11 - October 13</h4>
                </Card.Text>
                <div>
                  <BiDollarCircle style={{ color: "#FFF" }} />{" "}
                  <NumberFormat
                    value={150000}
                    thousandSeparator={true}
                    prefix={"Rp "}
                    displayType={"text"}
                    renderText={(value) => (
                      <span style={{ fontSize: 14, color: "#FFF" }}>
                        {value}
                      </span>
                    )}
                  />
                </div>
                <Button
                  className={"mt-3 shadow"}
                  variant="primary"
                  style={{
                    backgroundColor: "#8400E2",
                    color: "#FFF",
                    border: 0,
                  }}
                  onClick={() => handleBuyTicket("azSLBal5fWJGKSoQIytD")}
                >
                  Buy Ticket
                </Button>
              </Card.Body>
            </Row>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            className={"shadow mb-5 rounded"}
            style={{
              height: 500,
              border: 0,
              backgroundImage:
                "url(https://creativedisc.com/web/wp-content/uploads/2018/04/WTF-banner.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <Row
              className={"ml-4"}
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <Card.Body>
                <Card.Title
                  className={"text-white font-weight-bold text-left"}
                  style={{ fontSize: 50 }}
                >
                  We The Fest
                </Card.Title>
                <Card.Text>
                  <h4 className={"text-white"}>October 11 - October 13</h4>
                </Card.Text>
                <div>
                  <BiDollarCircle style={{ color: "#FFF" }} />{" "}
                  <NumberFormat
                    value={50000}
                    thousandSeparator={true}
                    prefix={"Rp "}
                    displayType={"text"}
                    renderText={(value) => (
                      <span style={{ fontSize: 14, color: "#FFF" }}>
                        {value}
                      </span>
                    )}
                  />
                </div>
                <Button
                  className={"mt-3 shadow"}
                  variant="primary"
                  style={{
                    backgroundColor: "#8400E2",
                    color: "#FFF",
                    border: 0,
                  }}
                  onClick={() => handleBuyTicket("azSLBal5fWJGKSoQIytD")}
                >
                  Buy Ticket
                </Button>
              </Card.Body>
            </Row>
          </Card>
        </SwiperSlide>
      </Swiper>
      {/* End of Banner */}

      <Container>
        {/* Start of My Events */}
        {myEvents.length > 0 ? (
          <span>
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
                        backgroundImage: "url(" + event.image_path + ")",
                        backgroundSize: "cover",
                      }}
                    >
                      <Row className={"mt-4 pl-3 pr-3"}>
                        <Col md={10}>
                          <h5 className={"font-weight-bold text-white"}>
                            {event.name}
                          </h5>
                          <p className={"text-white"}>
                            {event.startMonth} {event.startDate} -{" "}
                            {event.endMonth} {event.endDate}{" "}
                          </p>
                        </Col>
                      </Row>
                    </Card>
                    {idx === 2 ? (
                      <p className={"mt-3 text-right"}>
                        Show me more <MdKeyboardArrowRight />
                      </p>
                    ) : null}
                  </Col>
                );
              })}
              {/* End of My Event Item */}
            </Row>
          </span>
        ) : null}
        {/* End of My Events */}

        {/* Start of 3 Highlight */}
        {/*<h3 className={"font-weight-bold mt-4"}>Explore events</h3>*/}
        {/*<Row>*/}
        {/*    <Col md={4}>*/}
        {/*        <Card*/}
        {/*            className={"shadow mt-2 p-3 rounded"}*/}
        {/*            style={{*/}
        {/*                border: 0,*/}
        {/*                backgroundImage: "url(img2.png)",*/}
        {/*                backgroundSize: "contain",*/}
        {/*            }}*/}
        {/*        >*/}
        {/*            <Row>*/}
        {/*                <Col md={6}>*/}
        {/*                    <h5 className={"font-weight-bold text-white mb-0 mt-2"}>*/}
        {/*                        Top summer music festivals 2020*/}
        {/*                    </h5>*/}
        {/*                    <p*/}
        {/*                        style={{fontSize: 16}}*/}
        {/*                        className={"text-light mb-0 mt-1"}*/}
        {/*                    >*/}
        {/*                        16 events*/}
        {/*                    </p>*/}
        {/*                </Col>*/}
        {/*            </Row>*/}
        {/*        </Card>*/}
        {/*    </Col>*/}
        {/*    <Col md={4}>*/}
        {/*        <Card*/}
        {/*            className={"shadow mt-2 p-3 rounded"}*/}
        {/*            style={{*/}
        {/*                border: 0,*/}
        {/*                backgroundImage: "url(img2.png)",*/}
        {/*                backgroundSize: "contain",*/}
        {/*            }}*/}
        {/*        >*/}
        {/*            <Row>*/}
        {/*                <Col md={6}>*/}
        {/*                    <h5 className={"font-weight-bold text-white mb-0 mt-2"}>*/}
        {/*                        Top summer music festivals 2020*/}
        {/*                    </h5>*/}
        {/*                    <p*/}
        {/*                        style={{fontSize: 16}}*/}
        {/*                        className={"text-light mb-0 mt-1"}*/}
        {/*                    >*/}
        {/*                        16 events*/}
        {/*                    </p>*/}
        {/*                </Col>*/}
        {/*            </Row>*/}
        {/*        </Card>*/}
        {/*    </Col>*/}
        {/*    <Col md={4}>*/}
        {/*        <Card*/}
        {/*            className={"shadow mt-2 p-3 rounded"}*/}
        {/*            style={{*/}
        {/*                border: 0,*/}
        {/*                backgroundImage: "url(img2.png)",*/}
        {/*                backgroundSize: "contain",*/}
        {/*            }}*/}
        {/*        >*/}
        {/*            <Row>*/}
        {/*                <Col md={6}>*/}
        {/*                    <h5 className={"font-weight-bold text-white mb-0 mt-2"}>*/}
        {/*                        Top summer music festivals 2020*/}
        {/*                    </h5>*/}
        {/*                    <p*/}
        {/*                        style={{fontSize: 16}}*/}
        {/*                        className={"text-light mb-0 mt-1"}*/}
        {/*                    >*/}
        {/*                        16 events*/}
        {/*                    </p>*/}
        {/*                </Col>*/}
        {/*            </Row>*/}
        {/*        </Card>*/}
        {/*        <p className={"mt-3 text-right"}>*/}
        {/*            Show me more <MdKeyboardArrowRight/>*/}
        {/*        </p>*/}
        {/*    </Col>*/}
        {/*</Row>*/}
        {/* End of 3 Highlight */}

        {/* Start of Filter Date */}
        <Row style={myEvents.length > 0 ? {marginTop: "75px"} : null}>
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
                <span style={{ color: "#3b3c3e" }}>
                  Select Date <RiArrowDownSLine />
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
                <span style={{ color: "#3b3c3e" }}>Today</span>
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
                <span style={{ color: "#3b3c3e" }}>Tomorrow</span>
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
                <span style={{ color: "#3b3c3e" }}>Weekend</span>
              </Col>
            </Row>
          </Card>
        </Row>
        {/* End of Filter Date */}

        {/* Start of Event List */}
        <Row style={{ marginTop: 20 }}>
          {/* Start of Event Item */}
          {events.map((event) => {
            return (
              <Col md={4} key={event.id}>
                <Card
                  className={"shadow rounded mt-4"}
                  style={{
                    border: 0,
                  }}
                >
                  <Card.Img variant={"top"} src={event.image_path} />
                  <Card.Body>
                    <Card.Title className={"text-left"}>{event.name}</Card.Title>
                    <Card.Text>
                      {/*<div>{event.start_time}</div>*/}
                      <div>
                        {event.startMonth} {event.startDate} - {event.endMonth}{" "}
                        {event.endDate} at {event.startHours}:
                        {event.startMinutes} - {event.endHours}:
                        {event.endMinutes}
                      </div>
                      <div className={"mt-3"}>
                        <GiMicrophone style={{ color: "#6000D4" }} />{" "}
                        <span style={{ fontSize: 14 }}>{event.artists}</span>
                      </div>
                      <div>
                        <BiDollarCircle style={{ color: "#6000D4" }} />{" "}
                        <NumberFormat
                          value={event.price}
                          thousandSeparator={true}
                          prefix={"Rp "}
                          displayType={"text"}
                          renderText={(value) => (
                            <span style={{ fontSize: 14 }}>{value}</span>
                          )}
                        />
                      </div>
                    </Card.Text>
                    <Button
                      variant="primary"
                      style={{
                        backgroundColor: "#8400E2",
                        color: "#FFF",
                        border: 0,
                      }}
                      className={"shadow"}
                      onClick={() => handleBuyTicket(event.id)}
                    >
                      Buy Ticket
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
          {/* End of Event Item */}
        </Row>
        {/* End of Event List */}
      </Container>

      {/* Start of Footer */}
      <footer className={"page-footer font-small"}>
        <div className={"footer-copyright text-center py-3"}>
          © 2020 Copyright
          <a href="#"> Gather Fest</a>
        </div>
      </footer>
      {/* End of Footer */}

      <ModalUserData
        onHide={() => {
          setShow(false);
        }}
        onSubmit={(data) => {
          handleSubmit(data);
        }}
        show={show}
      />
    </div>
  );
}

export default withRouter(withFirebase(Home));
