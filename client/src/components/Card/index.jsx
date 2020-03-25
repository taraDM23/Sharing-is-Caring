import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Img from "../Card/"
import "./style.css";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    paddingBottom: 5,
    marginBottom:10,
    float: "relative",
    clear: "left"
  },
  media: {
    height: 140,
  },
  
});


export default function MediaCard(props) {
  const classes = useStyles();
  console.log(props.item);

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="Img"
            title={props.item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {props.item.title} posted by {props.item.author}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={"/item/" + props.item._id}> Learn More</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

