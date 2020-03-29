import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron  >
            <h1 style={{ fontFamily: "Work Sans, sans-serif", fontWeight: "normal" }}>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
          <h1 style={{ fontFamily: "Work Sans, sans-serif", margin: 15, fontWeight: "normal" }}>Oops!  Try logging in</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
