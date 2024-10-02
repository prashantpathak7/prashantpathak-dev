import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (

    <div className='footer-container'>
        <div className='section1-left'>
            <div className='get-in-touch'>
              GET IN TOUCH
            </div>
            <div className='emailid'>
              prashant409997@gmail.com
            </div>
            <div className='address'>
              Pune, India
            </div>
            <div className='DevelopedBy'>
              Developed with ♥ and ReactJS + Firebase
            </div>
        </div>

        <div className='section2-Right'>
            <div className='get-in-touch'>
                LET'S CONNECT
            </div>
            <div className='linkedIn'>
            <a href="https://www.linkedin.com/in/prashantpathak7/" target="_blank" class="link">LinkedIn</a>
            </div>


            <div className='linkedIn'>
            <a href="https://www.fiverr.com/pathakprashant" target="_blank" class="link">Fiverr Reviews</a>
            </div>

            <div className='linkedIn'>
            <a href="https://github.com/prashantpathak7" target="_blank" class="link">GitHub</a>
            </div>

        </div>

    </div>
      
    );
}

export default Footer;
