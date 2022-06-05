import React, { useState } from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import Slide from 'react-reveal/Slide';


function Projects(){

  const [isMousedOver, setMouseOver] = useState(false);
  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

    return(<div className="github" id="logos"> 
    
    
    <h2 className="github-heading"> Projects </h2>
    <div className="my-projects" style ={{backgroundColor:"#F6FBF4"}}>
<Slide right>
<h5>Portfolio Website</h5>
<p>I have designed my own Portfolio Website by using React, JS, React-Bootstrap, HTML and CSS.</p>
</Slide>
</div>

<div className="my-projects">
<Slide left>
<h5>My Notes</h5>
<p>I have Designed and developed the front of this application by using React, JS, Material Ui, HTML, CSS.</p>
</Slide>
</div>

<div className="my-projects" style ={{backgroundColor:"#F6FBF4"}}>
<Slide right>
<h5>To-do List</h5>
<p>Designed and developed the front end of this application with React, JS, HTML, and CSS.</p>
</Slide>
</div>


<div className="my-projects">
<Slide left>
<h5>EmojiPedia</h5>
<p>I made the dictionary for emojis by using React props and mapping, JS, HTML and CSS.</p>
</Slide>
</div>

<div className="my-projects" style ={{backgroundColor:"#F6FBF4"}}>
<Slide right>
<h5>Blog Website</h5>
<p>Developed a front/back end operations of this website by using,
 Mongoose, Ejs,Express, HTML, and CSS.</p>
</Slide>
</div>

<div className="my-projects">
<Slide left>
<h5>Simon Game</h5>
<p> Developed Simon game for browsers using HTML, CSS, JS and jQuery.</p>
</Slide>
</div>

<div className="my-projects" style ={{backgroundColor:"#F6FBF4"}}>
<Slide right>
<h5>Drum Kit Website</h5>
<p>I have designed the Drum Kit web application with JS, DOM, CSS, and HTML.</p>
</Slide>
</div>

<div className="my-projects">
<Slide left>
<h5>Dicee Game</h5>
<p>Developed the Dicee Game web application by JS, DOM, CSS, and HTML.</p>
</Slide>
</div>

<div className="my-projects" style ={{backgroundColor:"#F6FBF4"}}>
<Slide right>
<h5>tindog</h5>
<p>Designed a tindog website by using Bootstrap, CSS and HTML.  </p></Slide>
</div>











        <p className="github-paragrapgh"> Click the below Github button for the projects:</p>
        <div className="github-icon">

        
        <a href="https://github.com/Jovindah">

        <Button variant="contained" style={{ backgroundColor: isMousedOver ?  "#65C18C" : "#149279" , fontFamily:"Poppins",  color: 'white', }}
       
       onMouseOver={handleMouseOver}
       onMouseOut={handleMouseOut}
      startIcon={<GitHubIcon />}>
        Github
      </Button>
</a>
</div>


        
      
    
    
    </div>
        




    )
}




export default Projects;

