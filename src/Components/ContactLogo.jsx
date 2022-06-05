    import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function ContactLogo(){

    return(
       <div className="social-icons">

      
       <a href="https://www.instagram.com/umer_naseer/">
    <InstagramIcon style= {{color: "white"}}/>
</a>
       

<a href="https://www.facebook.com/umer.jovindah.5/">
<FacebookIcon style= {{color: "white"}} />
</a>



<a href="https://www.linkedin.com/in/umernaseer/">
<LinkedInIcon style= {{color: "white"}}/>
</a>




       </div>

        





    )
}




export default ContactLogo;