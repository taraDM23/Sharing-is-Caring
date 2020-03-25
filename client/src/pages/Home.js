import React, { useState, useEffect } from "react";
//import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Grid from '@material-ui/core/Grid';
//import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../components/Grid";
//import { List } from "../components/List";
import MediaCard from "../components/Card";



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
    <Grid container spacing={3} >
      <Grid item xs={12}>
        <Jumbotron >
          <h1>Available Items</h1>
        </Jumbotron>

        {items.length ? (
          <Grid container>
            {
              items.map(item => (
                <Grid item xs={3}>
                  <MediaCard key={item._id} item={item}>
                  </MediaCard>
                </Grid>
              ))
            }
          </Grid>

        ) : (
            <h3>No Results to Display</h3>
          )}
      </Grid>
    </Grid>

  );
}

export default Home;
