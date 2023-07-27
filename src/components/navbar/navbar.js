// import { AppBar, Icon, List, Toolbar, makeStyles } from '@material-ui/core';
import { AppBar,  Drawer,  IconButton,  List, Toolbar, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import logo from "../../images/Free_Sample_By_Wix.jpg";
// import { Link, animateScroll as scroll } from 'react-scroll'; 
import { Link } from 'react-scroll'; 
import  InfoTwoToneIcon  from '@material-ui/icons/InfoTwoTone';
import  BuildTwoToneIcon from '@material-ui/icons/BuildTwoTone';
import  EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
import  ContactMailTwoToneIcon from "@material-ui/icons/Menu";
import MenuIcon from "@material-ui/icons/ContactMailTwoTone";
import CancelIcon from "@material-ui/icons/Cancel"


//libreria para el scrool del menur el as es un alias 
//instalamos la librería que nos permite hacer el scrool del menu npm add react-scroll
// import ContactMailTwoToneIcon from '@mui/icons-material/ContactMailTwoTone';
//material-ui-icons  https://mui.com/material-ui/material-icons/



const links = [
    {
        id: "aboutme",
        text: "About me",
        icon: <InfoTwoToneIcon />
        // icon: <ContactMailTwoToneIcon/>
    },

    {
        id: "portfolio",
        text: "PortFolio",
        icon: <BuildTwoToneIcon />
        // icon: <ContactMailTwoToneIcon/>
    },

    {
        id: "resume",
        text: "Resume",
        icon: <ContactMailTwoToneIcon />
        // icon: <ContactMailTwoToneIcon/>
    },

    {
        id: "contact",
        text: "Contact",
        icon: <EmojiObjectsTwoToneIcon />
        // icon: <ContactMailTwoToneIcon/>
     }
]


const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false) ;// aqui definimos el estado del menu lateral, primero loponemos en false y cuando se pone true aparece el boton de cerrar
    return (
        //añado este reactfarmer para que no se dañe la estructura
       //vamos a crear la barra de navegación con la libreria material IU
        <> 
         <AppBar position='sticky' className={classes.logo}>
            
            <Toolbar className={classes.toolbar}>
                <img src={logo} className={classes.logo} alt="logo" />
                <List className={classes.menu}>
                    {
                        links.map(({id, text}, index)=>(
                            //pasamos el html lo que se muestra 1:10 min, esto permite hacer el scroll al dar clicke 
                            //en las opciones del menu.  https://github.com/fisshy/react-scroll esta es la docuemntación
                            <Link key={index} 
                            to={id} 
                            spy={true} 
                            activeClass="active" 
                            smooth={true} 
                            duration={500} 
                            offset={-85}>
                            {text}</Link>

                        ))
                    }
                </List>   
                    {/* Menu Hamburguesa */}
                <IconButton edge="end" className={classes.menubutton}>
                    <MenuIcon fontSize='large' />
                </IconButton>
                    

            </Toolbar>
        </AppBar>
               
            <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
                
                <IconButton  className={classes.menubutton} onClick={()=>setOpen(false)}>
                    <CancelIcon >

                    </CancelIcon>
                </IconButton>


            </Drawer>

        </>
            

    ) 
}

const useStyles = makeStyles ((theme)=>({
    
    logo: {
        height:"5.5rem",
        objectFit: "contain",   // esto nos asegura que la imagen no se va a distorcionar
        "&:hover": {cursor:"pointer"} //al pasar el mouse se convierte en mano o sea se ejecuta una acción
    },

    //barra de navegación
    toolbar:{
        backgroundColor:"#fff",
        top:0, left: 0, right: 0,zIndex: 999,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    menu: {
        //hacerlo responsivo desaparece el menu
        [theme.breakpoints.down("sm")]:{
            display:"none"
        },


       "& a":{
        color: "#333",
        fontSize: "1rem",
        fontWeight: "bold",
        marginLeft: theme.spacing(3),

       },

       "& a:hover":{
        cursor: "pointer",
        color: "#2667FF",
        borderBottom: "1px solid #2667FF",
        },
    },
menubutton:{
    display: "none",
    [theme.breakpoints.down("sm")]:{
        display: "block",
        color: "tomato",
        position: "absolute",
        top: 0,
        right: 10,
    }
}

  }))

export default Navbar;

