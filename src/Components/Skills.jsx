import React from "react";
import Roll from 'react-reveal/Roll';













function Skills(){



    return(
       
        <div className="press" >
        
        <h2>Skills</h2>
        <p>
            I have strong communication  and problem solving skills. I have the abilty to
            plan and organize the work in a timely and professional manner. I am a result
            oriented person. I enjoy working independently and in a team environment.
            I can speak Bokmål (beginner), English (Fluent) and Urdu (Native). 
            I have expertise in 
            React, JavaScript, Jquery, Express, NoSQL, Node, RESTful API, Bootstrap, CSS and HTML.
        </p>
          <div className="logos-div">
       <Roll left> 
       <img src="/images/react.png"  alt="logo-icons" className="logos"/>
<img src= "/images/javascript.png" alt="logo-icons"  className="logos"/>
<img src="/images/nodejs.png"  alt="logo-icons" className="logos"/>
<img src="/images/mongodb.png"  alt="logo-icons" className="logos"/>
<img src="/images/express.png"  alt="logo-icons" className="logos"/>
<img src= "/images/bootstrap.png"  alt="logo-icons" className="logos"/>
<img src="/images/css.png"  alt="logo-icons" className="logos"/>
<img src="/images/html.png"  alt="logo-icons" className="logos"/>     
</Roll>
       </div>
       
        </div>




    )
}

export default Skills;