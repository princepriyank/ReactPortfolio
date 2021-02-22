import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import NITP from "../../assets/img/experience/NITP.jfif";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={NITP} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Web Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">NITP Official Web Team</strong>
                    <br />
                    <strong>Technology:</strong> React JS, Node JS, CSS, MS-SQL, Gatsby
                    <br />
                    <strong>Duration:</strong> Feb 2020 - Present
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed &amp; enhanced</strong> revamped NITP website with mobile first design principle.</li>
                      <li><strong>Developed &amp; managed</strong> Physical server setup inside college premise.
                      </li>
                      <li><strong>Provided</strong> website maintenance when servers crashed. 
                      </li>
                      <li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according 
                      to the college requirements.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
