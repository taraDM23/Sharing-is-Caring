import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [item, setItem] = useState({})

  useEffect(() => {
    API.getItem(props.match.params.id)
      .then(res => setItem(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h4>
              {item.title}
            </h4>

            <h5>
              Shared by {item.author}
            </h5>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <h4> Details </h4>
            <ul>
              <li>Item Description : {item.synopsis}</li>
              <li>Quantity: {item.quantity}</li>
              <li>Date Posted</li>
              <li>Is delivery available?  {item.delivery} </li>
              <li>Pick Up Location: {item.pickupLocation}</li>
              <li>Pick Up times: {item.pickupTime}</li>
              <li>Items will expire by : {item.expDate} </li>
              <li>Additional Information: {item.OtherNotes}  </li>
              <li>Date Posted: {item.date} </li>
              <li>Post ID: {item.id}   </li>
            </ul>
          </article>
        </Col>
      </Row>
      <Row>
        <Col size="md-10">
          <Link to="/Home">← Back to Items</Link>
        </Col>
      </Row>
    </Container>
  );
}


export default Detail;
