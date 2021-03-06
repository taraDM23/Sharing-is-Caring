import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import Image from 'material-ui-image'
import "./style.css";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    paddingBottom: 5,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    float: "relative",
    clear: "left",
    color: "black",
    height: 300,
    fontFamily: 'Work Sans',
    
  },
  media: {
    height: 140,
  },

});


export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <Link to={"/item/" + props.item._id } >
            <img src={props.item.photo} style= {{width: 300, height: 200}} alt="donation"></img>
            <CardContent>
              <Typography gutterBottom variant="p" component="p" style= {{padding: 0}}>
                {props.item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style= {{padding: 0 , wordWrap: "break-word"}}>
                {props.item.title} posted by {props.item.author}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={"/item/" + props.item._id}></Link>
          </Button>
        </CardActions>
      </Card>
    </div >
  );
}

