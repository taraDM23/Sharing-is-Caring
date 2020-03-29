import React from "react";
import Jumbotron from "../components/Jumbotron";
//import { makeStyles } from '@material-ui/core/styles';
//import MediaCard from "../components/Card/index";

function aboutUs() {
  return (
    <div>
      <Jumbotron style={{ fontFamily: "Work Sans, sans-serif", fontWeight: "normal" }}>
        <h1 style={{ fontFamily: "Work Sans, sans-serif", fontWeight: "normal" }}>Who are We?</h1>
      </Jumbotron>
      <p style={{ fontFamily: "Work Sans, sans-serif", marginRight: 50, marginLeft: 50, fontWeight: "normal", }}>
        First off Welcome! This is a public community site for folk like you and me to share items
        that you have excess of or want to give away. These can vary from old clothes and furniture to excess
        fruits and vegetables form a farming endeavour. Whatever the donation this site will form a common place Whatever
        where the community can use to reach out to those who need an extra helping hand.
      </p>
      <h5 style={{ marginRight: 50, marginLeft: 50, fontFamily: "Work Sans, sans-serif", fontWeight: "normal" }}>Guidelines</h5>
      <p style={{ marginRight: 50, marginLeft: 50, fontFamily: "Work Sans, sans-serif", fontWeight: "normal" }}>- All items shared on this site are free of charge. If you want to sell -- there are other platforms that can be used. </p>
      <p style={{ marginRight: 50, marginLeft: 50, fontFamily: "Work Sans, sans-serif", fontWeight: "normal" }}>- Do not remove a post that does not belong to you. Only the poster has the right to do so.</p>
      <p style={{ marginRight: 50, marginLeft: 50, fontFamily: "Work Sans, sans-serif", fontWeight: "normal" }}>- This site is community run and public, so please do not share information that you do not wish to make public.</p>
      <p style={{ marginRight: 50, marginLeft: 50, fontFamily: "Work Sans, sans-serif", fontWeight: "normal" }}>- This site will not tolerate and form of hate speech on this site.</p>
      <p style={{ marginRight: 50, marginLeft: 50, fontFamily: "Work Sans, sans-serif", fontWeight: "normal" }}>- Donations are first come forst searve - We only ask the submitters to remove their posts once a claim confirmation has been made.</p>

      <p style={{ color: "white" }}>('\n')</p>
      <p style={{ color: "white" }}>('\n')</p>
      <p style={{ color: "white" }}>('\n')</p>
      <p style={{ color: "white" }}>('\n')</p>
    </div>

  );

}

export default aboutUs;