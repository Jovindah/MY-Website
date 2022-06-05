import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';






import Forms from "./Forms";
import Appbar from "./Appbar";
import Projects from "./Projects";
import Profile from "./Profile";


import Skills from "./Skills.jsx";
import Aboutme from "./Aboutme";













function App() {
  return (
    <div className="App">
  


<Appbar />
     

     <Profile />

   
   
     
      <Aboutme /> 
    <Skills />
 
      <Projects />

      <Forms />


   
  
     
     


      
     
      
      
    </div>
  );
}


export default App;



