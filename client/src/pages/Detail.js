import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
//import item from "./Items";


function Detail(props) {
  const [item, setItem] = useState({})
 console.log(item + "testDetails")
  useEffect(() => {
    API.getItem(props.match.params.id)
      .then(res => setItem(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <Container fluid>
      <Row>
        <Jumbotron>
          <h5>
            {item.title}
          </h5>

          <h5>
            Shared by {item.author}
          </h5>
        </Jumbotron>
        <Col size="md-12">

        </Col>
      </Row>
      <Row>
        <Col size="md-12 md-offset-1">
          <article style={{ fontFamily: "Work Sans, sans-serif", padding: 15, marginRight: 50, marginLeft: 50, fontWeight: "normal" }} >
            <h4 style={{ fontFamily: "Work Sans, sans-serif", fontWeight: "normal" }}> Details </h4>
            <img src={item.photo}></img>
            <ul>
              <p></p>
              <li>Item Description : {item.synopsis}</li>
              <li>Quantity: {item.quantity}</li>
              <li>Is delivery available?  {item.delivery} </li>
              <li>Pick Up Location: {item.pickupLocation}</li>
              <li>Pick Up times: {item.pickupTime}</li>
              <li>Items will expire by : {item.expDate} </li>
              <li>Additional Information: {item.OtherNotes}  </li>
              <li>Date Posted: {item.date} </li>
              <li>Post ID: {item._id}   </li>
 
            </ul>
            <Link to="/Home" style={{ fontFamily: "Work Sans, sans-serif", margin: 15, fontWeight: "normal" }}>← Back to Items</Link>
          </article>
        </Col>
      </Row>
    </Container>
  );
}


export default Detail;
