import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn, } from "../components/Form";

function Items() {
  const [items, setItem] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadItems()
  }, [])

  function loadItems() {
    API.getItems()
      .then(res =>
        setItem(res.data)
      )
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveItem({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis,
        quantity: formObject.quantity,
        expDate: formObject.expDate,
        OtherNotes: formObject.OtherNotes,
        delivery: formObject.delivery,
        pickupLocation:formObject.pickupLocation,
        pickupTime: formObject.pickupTime,
        photo: formObject.photo,
        date:formObject.date, 
      })
        .then(res => loadItems())
        .catch(err => console.log(err));
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>What would you like to donate?</h1>
          </Jumbotron>
          <h4>Please enter the details of the item here:</h4>
          <form style={{marginLeft: 50 , marginRight:50, marginTop: 15}} >
      
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Title (required)"

            />
            <Input
              onChange={handleInputChange}
              name="author"
              placeholder="Your Details (required)"
            />
            <TextArea
              onChange={handleInputChange}
              name="synopsis"
              placeholder="Donation Details"
            />
             <Input
              onChange={handleInputChange}
              name="quantity"
              placeholder="Quantity"
            />
             <Input
              onChange={handleInputChange}
              name="expDate"
              placeholder="Expiration Details (Optional)"
            />
             <Input
              onChange={handleInputChange}
              name="Other"
              placeholder="Other Details (Optional)"
            />
{/*              <Checkbox
              onChange={handleInputChange}
              name="delivery"
              label="Delivery Offered"
              //type="checkbox"
           /> */}
             <Input
              onChange={handleInputChange}
              name="pickupLocation"
              placeholder="pickup Location (Optional)"
            />
             <Input
              onChange={handleInputChange}
              name="pickupTime"
              placeholder="Pickup Time (Optional)"
            />
             <Input
              onChange={handleInputChange}
              name="Image"
              placeholder="Image"
            />
            <FormBtn
              disabled={!(formObject.author && formObject.title)}
              onClick={handleFormSubmit}       
            >
              Submit
              </FormBtn>
               
          </form>
        </Col>
      </Row>
    </Container>
  );
}


export default Items;
