import { makeStyles } from "@material-ui/core";
import Navbar from "./components/navbar/navbar";
import Aboutme from "./components/About/aboutme";
import Contact from "./components/contact/contact";
import Portfolio from "./components/portfolio/portfolio";
import Resume from "./components/resume/resume";



function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <Aboutme title="About Me" id="aboutme" dark={true} />
      <Portfolio title="Portfolio" id="portfolio" dark={true} />
      <Resume title="Resume" id="resume" dark={true} />
      <Contact title="Contact" id="contact" dark={true} />
      
     
    </div>
  );
}



const useStyles = makeStyles ((theme)=>({
  root: {
    
  }
}))



export default App;
