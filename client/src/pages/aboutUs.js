import React from "react";
import Jumbotron from "../components/Jumbotron";
//import { makeStyles } from '@material-ui/core/styles';
//import MediaCard from "../components/Card/index";

function aboutUs() {
  return (
    <div>
      <Jumbotron>
        <h1>About Us</h1>
      </Jumbotron>
      <p style={{ marginRight: 50, marginLeft: 50, fontWeight: "normal",}}>
        This is a public site to post items that you have excess of or want to give away. 
      </p>  
    </div>
    
  );
  
}

export default aboutUs;