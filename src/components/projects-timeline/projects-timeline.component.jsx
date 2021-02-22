import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import imagetour from "../../assets/img/projects/360image.png";
import image_gallery from "../../assets/img/projects/imagegallery.png";
import Chat from "../../assets/img/projects/Flutter-Chats.png";
import AngularCOV from "../../assets/img/projects/COVID-Angular.png";
import FirebaseCOV from "../../assets/img/projects/COVID-Firebase.png";
import Tinyhouse from "../../assets/img/projects/TinyhouseSalesForce.png";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
// skills
import L_REACT from "../../assets/img/skills/react.svg";
import Angular from "../../assets/img/skills/Angular.png";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import Java from "../../assets/img/skills/java.svg";
import Flutter from "../../assets/img/skills/flutter.svg";
import Firebase from "../../assets/img/skills/Firebase.webp";


import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        <ImageEvent
            date="12/01/2021"
            className="text-center"
            text="360 degree image tour"
            src={imagetour}
            alt="360 degree image tour"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>360 degree home tour is made in react as assesment task for NITP Web Team. It is focused on creating google street view type tour Structure.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Shows images in 360 sphere view</li>
                          <li>Stitches image together to create a connected graph</li>
                          <li>Respoisive Design with gyroscope facility for camera movement inside spherical image environment</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://imagepanorama360priyank.netlify.app//"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/princepriyank/StreetViewHome"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/watch?v=lp2T9C0jejo&feature=youtu.be"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


<ImageEvent
            date="26/10/2020"
            className="text-center"
            text="Image Gallery"
            src={image_gallery}
            alt="Image Gallery"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> ImageGallery is made with react that has subtle animations. This uses firebase to store new images and is updated in realtime.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Gallery with images shown in grid.</li>
                          <li>Uses firebase for image upload and display.</li>
                          <li>Smooth Animations</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Firebase}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://web-gallery-priyank.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/princepriyank/ImageGallery"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
             </div>
          </ImageEvent>
          <ImageEvent
            date="17/10/2002"
            className="text-center"
            text="Flutter Chat"
            src={Chat}
            alt="Flutter Chat"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Chat App with basic functionality of Login Signup And messaging funtction. It used realtime firebase database.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Realtime Database</li>
                          <li>Login SignUp with Sessions </li>
                          <li>Chat functionality with emoji support</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Flutter}
                                alt="Flutter"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Flutter
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Firebase}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/princepriyank/chatterbox"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
             </div>
          </ImageEvent>
          <ImageEvent
            date="20/07/2020"
            className="text-center"
            text="E COVID HelpDesk Website"
            src={AngularCOV}
            alt="E COVID HelpDesk Website"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> COVID-19 Helpdesk Application is an angular web application. It has features like Self Assesment Test, News related to COVID-19 with realtime updates and information chamber.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Self Assesment Test</li>
                          <li>Information Page </li>
                          <li>Responsive UI</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Angular}
                                alt="Angular"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Angular
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/divyaprakashrx/Helpdesk"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
             </div>
          </ImageEvent>
          <ImageEvent
            date="20/06/2020"
            className="text-center"
            text="E COVID HelpDesk App"
            src={FirebaseCOV}
            alt="E COVID HelpDesk App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> COVID-19 Helpdesk Application is a cross-platform application that can run on ios as well as android. It has features like Self Assesment Test, News related to COVID-19 with realtime updates and information chamber.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Self Assesment Test</li>
                          <li>News and tweets related to COVID </li>
                          <li>Informations and awareness realted to COVID</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Flutter}
                                alt="Flutter"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Flutter
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/princepriyank/e-covid-19-helpdesk"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
             </div>
          </ImageEvent>
          <ImageEvent
            date="16/09/2019"
            className="text-center"
            text="Tiny House SalesForce"
            src={Tinyhouse}
            alt="Tiny House SalesForce"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A team project in collaboration with hackslash development Club. It was tailored to give easy business maintainance of shop with functionality such as qr code scanning.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Realtime Database</li>
                          <li>Login SignUp with Sessions </li>
                          <li>Point of Sales qr code scanning</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Java}
                                alt="Java"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Java
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Firebase}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/hackslash-nitp/tinyhouse-salesforce-android"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
             </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
