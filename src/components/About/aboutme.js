import React from "react";
import { Card, CardContent, CardMedia, Typography, makeStyles } from "@material-ui/core";
import vcalle from "../../images/vcalle.jpg";
// import TypeWriter from "react-typewriter";


const Aboutme = ({id, title, dark }) => {
    const classes = useStyles();
    return (
      <div className={`${classes.section} ${dark && classes.sectiondark} `}>
        
        <div className={classes.sectioncontent} id={id}>
          <Typography variant="h3">{title}</Typography>
          <Card className={classes.card}>
            <CardMedia image={vcalle} className={classes.cmedia} title="picture" />

              <CardContent className={classes.cardcontent}>
                Contenido referente a la profesión de Valerie. y su proyectos                {/* <TypeWriter
                
                  text="Valerie Calle"
                  textStyle={{ fontSize: "2rem", fontWeight: "700px", color: "#026FEB" }}
                />
                {/* <TypeWriter
                  text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas"
                  textStyle={{ fontSize: "1rem", fontWeight: "10px", color: "#D41B06" }}
                />  */} 

              </CardContent>


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
      width: "650px",
      height:"450px",
      display: "flex",
      marginTop: theme.spacing(5),
      position: "relative",
      backgroundColor: "#F6F6F6",

    },

    cmedia:{
      width: "250px",
      height: "auto",
      ObjectFit: "cover",
      margin: theme.spacing(3),
         }
  }))

export default Aboutme;