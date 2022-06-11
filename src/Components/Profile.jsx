import React, { useState } from "react";

import Button from '@material-ui/core/Button';

import GetAppIcon from '@material-ui/icons/GetApp';







import Typical from "react-typical";



function Profile() {


  const [isMousedOver, setMouseOver] = useState(false);
  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    
    <div className="profile-container" >
    

      <div className="profile-parent">
        <div className="profile-details">

        

       
         
          <div className="profile-details-name">
            <span className="primary-text">
            <p> 
            Hello, I 'M  <span className="highlighted-text">Umer Naseer</span>
            </p>
             
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical steps={[
                "JavaScript Developer 🌐" , 1000,
                "Front/Back end Developer 🖥" , 1000,
                "React Developer 📱" , 1000,
                ]} loop={Infinity} wrapper="p" />
            
              </h1>
              <p className= "para">
                knowledge of building applications with front and back end
                operations.
              </p>
            </span>
          </div>
          <div className="profile-options" id="resume">
            
            <a
              href="umer.pdf"
              download="Resume Umer.pdf"
            >
            
            <Button
        variant="contained"
        style={{ backgroundColor: isMousedOver ?   "#149279" : "white" , fontFamily:"Poppins",  color: 'black', }}
       
       onMouseOver={handleMouseOver}
       onMouseOut={handleMouseOut}
        
        startIcon={<GetAppIcon />} >
        Get Resume
      </Button>
           
              
     
            </a>
          </div>
        </div>
        <div className="profile-picture">
        
          <img src="/images/umer5.png" className="profile-picture-background"  alt="mine" />
        </div>
     
     
      </div>
     

    </div>
  );
}

export default Profile;
