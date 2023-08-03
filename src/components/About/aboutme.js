import React from "react";
import { Card, CardActions, CardContent, CardMedia, Typography, makeStyles } from "@material-ui/core";
import vcalle from "../../images/vcalle.jpg";
// import { TypeWriterEffect } from "react-typewriter-effect";
import TypeWriterEffect from "react-typewriter-effect";




const Aboutme = ({id, title, dark }) => {
    const classes = useStyles();
    return (
      <div className={`${classes.section} ${dark && classes.sectiondark} `}>
        
        <div className={classes.sectioncontent} id={id}>
          <Typography variant="h3">{title}</Typography>
          <Card className={classes.card}>
            <CardMedia image={vcalle} className={classes.cmedia} title="picture" />

            <CardContent className={classes.cardcontent}>
              <TypeWriterEffect
                text="Valerie Calle"
                textStyle={{ fontSize: "3rem", fontWeight: "600px", color: "#A78295" }}

              />  

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus. Accumsan in nisl nisi scelerisque eu. Maecenas accumsan lacus vel facilisis. Malesuada bibendum arcu vitae elementum curabitur vitae. Purus non enim praesent elementum facilisis leo. Sit amet consectetur adipiscing elit duis. Turpis egestas integer eget aliquet. Ridiculus mus mauris vitae ultricies leo. Vel turpis nunc eget lorem dolor sed viverra. Facilisis mauris sit amet massa vitae. Vitae congue eu consequat ac felis donec et odio pellentesque. At varius vel pharetra vel turpis nunc eget.

                Aliquet nibh praesent tristique magna sit. Adipiscing enim eu turpis egestas pretium aenean pharetra.
                Consectetur purus ut faucibus pulvinar elementum integer enim. Dictum sit amet justo donec enim. Morbi quis commodo odio aenean sed. </p>

            </CardContent>
            <CardActions>

              {/* <Button variant = "contained" className={classes.pdfbutton}>
                <a href = { } download>
                  Download CV
                </a>
              </Button> */}


            </CardActions>


          </Card>
        </div>
        
      </div>
    );
};

// Section Style
const useStyles = makeStyles ((theme)=>({
    section: {
      minHeight:"100vh",
    },
    sectiondark:{
      background: "#FFFFFF",
      color:"#000",

    },

    sectioncontent:{
      maxWidth: "80vw",
      margin: "0 auto",
      
    },
    card: {
      width: "80%",
      height:"450px",
      display: "flex",
      marginTop: theme.spacing(5),
      position: "relative",
      backgroundColor: "#F6F6F6",

    },

    cmedia:{
      width: "100vw",
      height: "auto",
      ObjectFit: "cover",
      margin: theme.spacing(3),
    },

    cardcontent:{
      marginTop: theme.spacing(2),
      "& p": {
        marginTop: theme.spacing(5),
      }
    },

    


  }))

export default Aboutme;