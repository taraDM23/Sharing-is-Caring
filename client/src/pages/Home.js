import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


function Home() {
  const [items, setItem] = useState([])
 
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

  function deleteItem(id) {
    API.deleteItem(id)
      .then(res => loadItems())
      .catch(err => console.log(err));
  }

 
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Available Items</h1>
          </Jumbotron>
          {items.length ? (
            <List>
              {items.map(item => (
                <ListItem key={item._id}>
                  <Link to={"/item/" + item._id}>
                    <strong>
                      {item.quantity} {item.title} posted by {item.author}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => deleteItem(item._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
      </Row>
    </Container >

  );
}

export default Home;
