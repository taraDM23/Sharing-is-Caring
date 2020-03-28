import React, { useState, useEffect, useContext } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Grid from '@material-ui/core/Grid';
import MediaCard from "../components/Card";
import AuthContext from '../context/auth-context';


function Home() {
  const { token } = useContext(AuthContext);
  const [items, setItem] = useState([])

  useEffect(() => {
    loadItems()
    console.log(loadItems)
  }, [])

  function loadItems() {
    API.getItems()
      .then(res =>
        setItem(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteItem(id) {
    // if user id and item it match show
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

                <Grid item sm={3} xs={12} >
                  <MediaCard key={item._id} item={item}>
                  </MediaCard>
                  {token && <DeleteBtn onClick={() => deleteItem(item._id)} />}
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
