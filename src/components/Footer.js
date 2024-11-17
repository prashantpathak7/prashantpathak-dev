import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (

    <div className='footer-container'>
        <div className='section-left'>
            <div className='get-in-touch'>
              GET IN TOUCH
            </div>
            <div className='emailid'>
              prashant409997@gmail.com
            </div>
            <div className='address'>
              Pune, India
            </div>
              
        </div>
        <div className='section-right'>
            <div className='get-in-touch'>
                LET'S CONNECT
            </div>

            <div className='SocialAccountLinks'>
            <a href="https://www.linkedin.com/in/prashantpathak7/" target="_blank" class="link">LinkedIn</a>
            </div>

            <div className='SocialAccountLinks'>
            <a href="https://www.fiverr.com/pathakprashant" target="_blank" class="link">Fiverr Reviews</a>
            </div>

            <div className='SocialAccountLinks'>
            <a href="https://github.com/prashantpathak7" target="_blank" class="link">GitHub</a>
            </div>

        </div>
        <div className='section-developedby'>
        <div className='DevelopedBy'>
              Developed with ♥ and ReactJS by me
            </div>
        </div>
    </div>
      
    );
}

export default Footer;
