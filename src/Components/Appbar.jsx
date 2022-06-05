import React  from 'react'
import {Navbar,Nav, Container,}  from "react-bootstrap-v5"
// import { BrowserRouter as Router, Route, Routes,Link} from "react-router-dom";
import {HashLink as Link} from "react-router-hash-link"
import { BrowserRouter as Router} from "react-router-dom";






// import Description from './Description/Description';
// import NewForms from './NewForms';
// import Profile from '../PortfolioContainer/Home/Profile';
// import { BrowserRouter as Router, Route, Routes ,Link} from "react-router-dom";




function Appbar(){


return(


<div className='navbar-container'>
   
 
<Router>





    
   
<Navbar className='Nav-bar'  variant={"dark"} expand="lg" >
  <Container fluid>
    <Navbar.Brand href="#" className='navbar-brand'><h2>Umer's Portfolio </h2></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto mb-2 mb-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
     
    <li className='list-items'>
    <Nav.Link    as={Link} to={{hash:"#home"}} className="Nav-items" >Home</Nav.Link>
    </li>
    

    <li className='list-items'>
        <Nav.Link   as={Link} to={{hash:"#resume"}} className="Nav-items"> Resume</Nav.Link>
        </li>


    <li className='list-items'>
    <Nav.Link   as={Link} to={{hash:"#about-me"}} className="Nav-items">About</Nav.Link>
        
        </li>
        <li className='list-items'>
        <Nav.Link   as={Link} to={{hash:"#logos"}} className="Nav-items">Projects</Nav.Link>
        </li>
    
        <li className='list-items'>
        <Nav.Link   as={Link} to={{hash:"#form"}} className="Nav-items">Contact</Nav.Link>
        </li>
        

 
      
      
        
        
      </Nav>
     
    </Navbar.Collapse>
  </Container>
</Navbar>



 



</Router>


</div>



)
}

export default Appbar;