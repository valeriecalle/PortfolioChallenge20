// import { AppBar, Icon, List, Toolbar, makeStyles } from '@material-ui/core';
import { AppBar,  Divider,  Drawer,  IconButton,  List, ListItem, ListItemIcon, Toolbar, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import logo from "../../images/Free_Sample_By_Wix.jpg";
import { Link } from 'react-scroll'; 

import MenuIcon from "@material-ui/icons/ContactMailTwoTone";
import CancelIcon from "@material-ui/icons/Cancel"
import { Dehaze, OpenInNew } from '@material-ui/icons';
import CameraFrontIcon from '@material-ui/icons/CameraFront';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';





const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(true) ;
    
    const links = [
        {
            id: "aboutme",
            text: "About me",
            icon: <CameraFrontIcon fontSize='large' />
            
        },
    
        {
            id: "portfolio",
            text: "Portfolio",
            icon: <BusinessCenterIcon fontSize='large' />
        },
    
        {
            id: "resume",
            text: "Resume",
            icon: <AssignmentIndIcon fontSize='large'/>
          
        },
    
        {
            id: "contact",
            text: "Contact",
            icon: <ContactPhoneIcon fontSize='large'/>
        }
    ]
    
    return (
        
        <> 
         <AppBar position='sticky' className={classes.logo}>
            
            <Toolbar className={classes.toolbar}>
                <img src={logo} className={classes.logo} alt="logo" />
                <List className={classes.menu}>
                    {
                        links.map(({id, text}, index)=>(
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
                 
                <IconButton edge="end" 
                    className={classes.menubutton}
                        onClick={()=>setOpen(!open)}> 
                    <Dehaze fontSize='large' />
                </IconButton>
                    

            </Toolbar>
        </AppBar>
               
            <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
                
                <IconButton  onClick={()=>setOpen(false)}>
                    
                    <CancelIcon  fontSize='large'/>

                    
                </IconButton>
                <Divider></Divider>

                    {
                        links.map(({id, text, icon}, index)=>(
                            <Link key={index}
                                className={classes.sidebar}
                                to={id}
                                spy={true}
                                activeClass="active"
                                smooth={true}
                                duration={500}
                                offset={-85}>
                                <ListItem component = "h3">
                                    <span>
                                        <ListItemIcon>
                                            {icon}
                                        </ListItemIcon>
                                    </span> {text}
                                </ListItem>
                            </Link>

                        ))
                    }

            </Drawer>

        </>
            

    ) 
}

const useStyles = makeStyles ((theme)=>({
    
    logo: {
        height:"5.5rem",
        objectFit: "contain",   
        "&:hover": {cursor:"pointer"} 
    },

    
    toolbar:{
        backgroundColor:"#fff",
        top:0, left: 0, right: 0,zIndex: 999,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    menu: {
       
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
        color: "#323F49",
        position: "absolute",
        top: 0,
        right: 10,
    }
},

sidebar:{
    width:"40vw",
    [theme.breakpoints.down("sm")]:{
        width: "60vw"
    },
    
    "& h3":{
        margin: theme.spacing(7,0,0,5),
        fontSize: "1.4rem",
    },

    "& h3:hover":{
        cursor: "pointer",
        color: "#2667FF",
        
        },
}


  }))

export default Navbar;

