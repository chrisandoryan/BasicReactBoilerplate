import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { GiMicrophone } from "react-icons/gi";
import Button from "@material-ui/core/Button";
import "./App.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

function App() {
  return (
    <div>
      {/* Start of Banner */}

      <Swiper spaceBetween={20} slidesPerView={1.15} className={"mt-4"}>
        <SwiperSlide>
          <Card
            className={"shadow ml-4 mb-5 rounded"}
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
                  className={"text-white font-weight-bold"}
                  style={{ fontSize: 50 }}
                >
                  We The Fest 2021
                </Card.Title>
                <Card.Text>
                  <h4 className={"text-white"}>Jul 12 - Jul 13</h4>
                </Card.Text>
                <div>
                  <BiDollarCircle style={{ color: "#FFF" }} />{" "}
                  <span style={{ fontSize: 14, color: "#FFF" }}>Rp30.000</span>
                </div>
                <Button
                  className={"mt-3"}
                  variant="contained"
                  style={{ backgroundColor: "#8400E2", color: "#FFF" }}
                >
                  Buy Ticket
                </Button>
              </Card.Body>
            </Row>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            className={"shadow-sm mb-5 rounded"}
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
                  className={"text-white font-weight-bold"}
                  style={{ fontSize: 50 }}
                >
                  We The Fest 2021
                </Card.Title>
                <Card.Text>
                  <h4 className={"text-white"}>Jul 12 - Jul 13</h4>
                </Card.Text>
                <div>
                  <BiDollarCircle style={{ color: "#FFF" }} />{" "}
                  <span style={{ fontSize: 14, color: "#FFF" }}>Rp30.000</span>
                </div>
                <Button
                  className={"mt-3"}
                  variant="contained"
                  style={{ backgroundColor: "#8400E2", color: "#FFF" }}
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
        <h3 className={"font-weight-bold"}>My events</h3>
        <Row>
          <Col md={4}>
            <Card
              className={"shadow mt-2 rounded"}
              style={{
                border: 0,
                backgroundImage:
                  "url(https://creativedisc.com/web/wp-content/uploads/2018/04/WTF-banner.jpg)",
                backgroundSize: "cover",
              }}
            >
              <Row className={"mt-4 pl-3 pr-3"}>
                <Col md={10}>
                  <h5 className={"font-weight-bold text-white"}>
                    We The Fest 2021
                  </h5>
                  <p className={"text-white"}>Jul 12 - Jul 13 </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className={"shadow mt-2 rounded"}
              style={{
                border: 0,
                backgroundImage:
                  "url(https://creativedisc.com/web/wp-content/uploads/2018/04/WTF-banner.jpg)",
                backgroundSize: "cover",
              }}
            >
              <Row className={"mt-4 pl-3 pr-3"}>
                <Col md={10}>
                  <h5 className={"font-weight-bold text-white"}>
                    We The Fest 2021
                  </h5>
                  <p className={"text-white"}>Jul 12 - Jul 13 </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className={"shadow mt-2 rounded"}
              style={{
                border: 0,
                backgroundImage:
                  "url(https://creativedisc.com/web/wp-content/uploads/2018/04/WTF-banner.jpg)",
                backgroundSize: "cover",
              }}
            >
              <Row className={"mt-4 pl-3 pr-3"}>
                <Col md={10}>
                  <h5 className={"font-weight-bold text-white"}>
                    We The Fest 2021
                  </h5>
                  <p className={"text-white"}>Jul 12 - Jul 13 </p>
                </Col>
              </Row>
            </Card>
            <p className={"mt-3 text-right"}>
              Show me more <MdKeyboardArrowRight />
            </p>
          </Col>
        </Row>
        {/* End of My Events */}

        {/* Start of 3 Highlight */}
        <h3 className={"font-weight-bold"}>Explore events</h3>
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
                    style={{ fontSize: 16 }}
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
                    style={{ fontSize: 16 }}
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
                    style={{ fontSize: 16 }}
                    className={"text-light mb-0 mt-1"}
                  >
                    16 events
                  </p>
                </Col>
              </Row>
            </Card>
            <p className={"mt-3 text-right"}>
              Show me more <MdKeyboardArrowRight />
            </p>
          </Col>
        </Row>
        {/* End of 3 Highlight */}

        {/* Start of Filter Date */}
        <Row style={{ marginTop: 20 }}>
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
        <Row className={"mt-4"}>
          <Col md={4}>
            <Card
              className={"shadow rounded"}
              style={{
                border: 0,
              }}
            >
              <Card.Img
                variant={"top"}
                src={
                  "https://creativedisc.com/web/wp-content/uploads/2018/04/WTF-banner.jpg"
                }
              />
              <Card.Body>
                <Card.Title>We The Fest 2021</Card.Title>
                <Card.Text>
                  <div>Jul 12 - Jul 13 at 21:00 - 02:00</div>
                  <div className={"mt-3"}>
                    <GiMicrophone style={{ color: "#6000D4" }} />{" "}
                    <span style={{ fontSize: 14 }}>
                      Rich Brian, Ando the Rapper of God
                    </span>
                  </div>
                  <div>
                    <BiDollarCircle style={{ color: "#6000D4" }} />{" "}
                    <span style={{ fontSize: 14 }}>Rp30.000</span>
                  </div>
                </Card.Text>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#8400E2", color: "#FFF" }}
                >
                  Buy Ticket
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className={"shadow rounded"}
              style={{
                border: 0,
              }}
            >
              <Card.Img
                variant={"top"}
                src={
                  "https://creativedisc.com/web/wp-content/uploads/2018/04/WTF-banner.jpg"
                }
              />
              <Card.Body>
                <Card.Title>We The Fest 2021</Card.Title>
                <Card.Text>
                  <div>Jul 12 - Jul 13 at 21:00 - 02:00</div>
                  <div className={"mt-3"}>
                    <GiMicrophone style={{ color: "#6000D4" }} />{" "}
                    <span style={{ fontSize: 14 }}>
                      Rich Brian, Ando the Rapper of God
                    </span>
                  </div>
                  <div>
                    <BiDollarCircle style={{ color: "#6000D4" }} />{" "}
                    <span style={{ fontSize: 14 }}>Rp30.000</span>
                  </div>
                </Card.Text>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#8400E2", color: "#FFF" }}
                >
                  Buy Ticket
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className={"shadow rounded"}
              style={{
                border: 0,
              }}
            >
              <Card.Img
                variant={"top"}
                src={
                  "https://creativedisc.com/web/wp-content/uploads/2018/04/WTF-banner.jpg"
                }
              />
              <Card.Body>
                <Card.Title>We The Fest 2021</Card.Title>
                <Card.Text>
                  <div>Jul 12 - Jul 13 at 21:00 - 02:00</div>
                  <div className={"mt-3"}>
                    <GiMicrophone style={{ color: "#6000D4" }} />{" "}
                    <span style={{ fontSize: 14 }}>
                      Rich Brian, Ando the Rapper of God
                    </span>
                  </div>
                  <div>
                    <BiDollarCircle style={{ color: "#6000D4" }} />{" "}
                    <span style={{ fontSize: 14 }}>Rp30.000</span>
                  </div>
                </Card.Text>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#8400E2", color: "#FFF" }}
                >
                  Buy Ticket
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className={"mt-4"}>
          <Col md={4}>
            <Card
              className={"shadow rounded"}
              style={{
                border: 0,
              }}
            >
              <Card.Img
                variant={"top"}
                src={
                  "https://creativedisc.com/web/wp-content/uploads/2018/04/WTF-banner.jpg"
                }
              />
              <Card.Body>
                <Card.Title>We The Fest 2021</Card.Title>
                <Card.Text>
                  <div>Jul 12 - Jul 13 at 21:00 - 02:00</div>
                  <div className={"mt-3"}>
                    <GiMicrophone style={{ color: "#6000D4" }} />{" "}
                    <span style={{ fontSize: 14 }}>
                      Rich Brian, Ando the Rapper of God
                    </span>
                  </div>
                  <div>
                    <BiDollarCircle style={{ color: "#6000D4" }} />{" "}
                    <span style={{ fontSize: 14 }}>Rp30.000</span>
                  </div>
                </Card.Text>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#8400E2", color: "#FFF" }}
                >
                  Buy Ticket
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className={"shadow rounded"}
              style={{
                border: 0,
              }}
            >
              <Card.Img
                variant={"top"}
                src={
                  "https://creativedisc.com/web/wp-content/uploads/2018/04/WTF-banner.jpg"
                }
              />
              <Card.Body>
                <Card.Title>We The Fest 2021</Card.Title>
                <Card.Text>
                  <div>Jul 12 - Jul 13 at 21:00 - 02:00</div>
                  <div className={"mt-3"}>
                    <GiMicrophone style={{ color: "#6000D4" }} />{" "}
                    <span style={{ fontSize: 14 }}>
                      Rich Brian, Ando the Rapper of God
                    </span>
                  </div>
                  <div>
                    <BiDollarCircle style={{ color: "#6000D4" }} />{" "}
                    <span style={{ fontSize: 14 }}>Rp30.000</span>
                  </div>
                </Card.Text>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#8400E2", color: "#FFF" }}
                >
                  Buy Ticket
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className={"shadow rounded"}
              style={{
                border: 0,
              }}
            >
              <Card.Img
                variant={"top"}
                src={
                  "https://creativedisc.com/web/wp-content/uploads/2018/04/WTF-banner.jpg"
                }
              />
              <Card.Body>
                <Card.Title>We The Fest 2021</Card.Title>
                <Card.Text>
                  <div>Jul 12 - Jul 13 at 21:00 - 02:00</div>
                  <div className={"mt-3"}>
                    <GiMicrophone style={{ color: "#6000D4" }} />{" "}
                    <span style={{ fontSize: 14 }}>
                      Rich Brian, Ando the Rapper of God
                    </span>
                  </div>
                  <div>
                    <BiDollarCircle style={{ color: "#6000D4" }} />{" "}
                    <span style={{ fontSize: 14 }}>Rp30.000</span>
                  </div>
                </Card.Text>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#8400E2", color: "#FFF" }}
                >
                  Buy Ticket
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* End of Event List */}
      </Container>
    </div>
  );
}

export default App;
