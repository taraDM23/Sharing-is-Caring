import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn, } from "../components/Form";
//import Checkbox from '@material-ui/core/Checkbox';
//import FormControlLabel from '@material-ui/core/FormControlLabel';


function Items() {
  const [items, setItem] = useState([])
  const [formObject, setFormObject] = useState({})
  console.log(items)
  console.log(formObject)

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
        pickupLocation: formObject.pickupLocation,
        pickupTime: formObject.pickupTime,
        photo: formObject.photo,
        date: formObject.date,
      })
        .then(res => loadItems())
        .catch(err => console.log(err));
      return window.location.replace(`/home`);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Jumbotron>
          <h1></h1>
        </Jumbotron>
        <Col size="md-12">

          <h4 style={{ fontWeight: "normal" }}>Please enter the details of the item here:</h4>
          <form style={{ marginLeft: 50, marginRight: 50, marginTop: 15 }} >

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
              name="OtherNotes"
              placeholder="Other Details"
            />
            {/*  <FormControlLabel
              control={
                <Checkbox
                  
                  onChange={handleInputChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Delivery Provided? "
            /> */}
            <Input
              onChange={handleInputChange}
              name="pickupLocation"
              placeholder="pickup Location (If any)"
            />
            <Input
              onChange={handleInputChange}
              name="pickupTime"
              placeholder="Pickup Time (If any)"
            />
            <Input
              onChange={handleInputChange}
              name="photo"
              placeholder="Add an image URL address"
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
