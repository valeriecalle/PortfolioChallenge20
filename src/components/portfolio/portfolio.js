import React from 'react';
import { Card, CardMedia, Typography, makeStyles } from "@material-ui/core";
import modulonod from "../../images/nod.png";
import modulohtml from "../../images/html.png";
import modulojs from "../../images/js.avif";
import modulomern from "../../images/mern.webp";
import modulooop from "../../images/oop.png";
import moduloreact from "../../images/react.jpg";
const Portfolio = ({id, title, dark }) => {
    const classes = useStyles();
    return (
      <div className={`${classes.section} ${dark && classes.sectiondark} `}>
        <div className={classes.sectioncontent} id={id}>
          <Typography variant="h3">{title}</Typography>
          <Card className={classes.card}>
            <CardMedia image={modulonod} className={classes.cmedia} title="picture"/>
            <CardMedia image={modulohtml} className={classes.cmedia} title="picture2"/>
            <CardMedia image={modulojs} className={classes.cmedia} title="picture"/>
            <CardMedia image={modulomern} className={classes.cmedia} title="picture2"/>
            <CardMedia image={modulooop} className={classes.cmedia} title="picture"/>
            <CardMedia image={moduloreact} className={classes.cmedia} title="picture2"/>






          </Card>
        
        
        
        
        
        
        
        
        
        </div>
      </div>
    );
};

const useStyles = makeStyles ((theme)=>({
    section: {
      minHeight:"100vh",
    },
    sectiondark:{
      background: "#F6F6F6",
      color:"#000",

    },
    sectioncontent:{
      maxWidth: "80vw",
      margin: "0 auto",
    },

    card: {
      width: "80%",
      height:"850px",
      display: "flex",
      marginTop: theme.spacing(5),
      position: "relative",
      backgroundColor: "#FFF",
    },

    cmedia:{
      width: "100vw",
      height: "400px",
      ObjectFit: "cover",
      margin: theme.spacing(3),
    },


  }))

export default Portfolio;