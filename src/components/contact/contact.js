import React from 'react';
import { Typography, makeStyles } from "@material-ui/core";

const Contact = ({id, title, dark }) => {
    const classes = useStyles();
    return (
      <div className={`${classes.section} ${dark && classes.sectiondark} `}>
        <div className={classes.sectioncontent} id={id}>
          <Typography variant="h3">{title}</Typography>
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
    }
  }))

export default Contact;