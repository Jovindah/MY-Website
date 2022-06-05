import React, { useState } from "react";
import emailjs from "emailjs-com"

import Contact from "./ContactLogo";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

import Footer from "./Footer";








function Forms() {

  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");
  const [input, setinput] = useState("Contact me");

  const [isMousedOver, setMouseOver] = useState(false);
  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleclick(event) {
    setinput(<h2>Thanks for Contacting me </h2>);
    event.preventDefault();
    setfullname("");
    setEmail(" ");
    setphone("");
    setmessage("");
    emailjs
      .sendForm(
        "service_uigahz4",
        "template_4djouu5",
        event.target,
        "AFhbNT08eZOwf_G1-"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }






  return (
    <div className="forms-container"  id="form">
    

    
    
      <div className="container">
      
        <span className="big-circle"></span>
       
        <div className="form">
          <div className="contact-info ">
            <h3 className="title">Let's get in touch</h3>
            

            <div className="info">
              <div className="information">
             
                <p><LocationOnIcon  />  Olva M.Troviks, Kringsjå 0864 Oslo</p>
              </div>
              <div className="information">
             
                
                <p> <MailIcon  /> naseerumer620@gmail.com</p>
              </div>
              <div className="information">
             
              
                <p> <PhoneIcon  /> +4793965325</p>
              </div>
            </div>

            <div className="social-media">
              <p className="contact-para">Connect with me :</p>
              <div >
              <Contact />

              </div>

            
            </div>
          </div>

          <div class="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form  onSubmit={handleclick}>
<h1 className="title">{<h3> {input}</h3>}</h1>



              



<div className="input-container">
        <input
          type="text"
          name="name"
          className="input"
          placeholder="User Name"
        
          required
          onChange={(event) => setfullname(event.target.value)}
          value={fullname}
        />
      </div>
              
      <div className="input-container">
        <input
          type="email"
          name="user-email"
          className="input"
          placeholder="Email"
          required
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </div>
      <div className="input-container">
        <input
          type="tel"
          name="user-phone"
          className="input"
          placeholder="Phone"
          onChange={(event) => setphone(event.target.value)}
          value={phone}
        />
      </div>

      <div className="input-container textarea">
        <textarea
          name="message"
          className="input"
          placeholder="Message"
          onChange={(event) => setmessage(event.target.value)}
          value={message}
          required
        ></textarea>
      </div>
          
           
      <Button type="submit" variant="contained" style={{ backgroundColor: isMousedOver ? "#65C18C" : "white" , fontFamily:"Poppins",  color: 'black',   }}
       
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      startIcon={<SendIcon />}>
        Send
      </Button>
          
            
            </form>
          
          </div>
         
        </div>
   
        
      </div>
     
    <Footer />
   
      </div>
   

  );
}

export default Forms;
