import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Grid from '@material-ui/core/Grid';
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
         {/*  <h1></h1> */}
        </Jumbotron>
        <h3 style={{ paddingBottom:15 , fontWeight: "normal" }}>Donations currently available</h3>
        {items.length ? (
          <Grid container>
            {
              items.map(item => (
                <Grid item sm={3} xs={12} >
                  <MediaCard key={item._id} item={item}>
                  </MediaCard>
                  <DeleteBtn onClick={() => deleteItem(item._id)} />
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
