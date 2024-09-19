import React from 'react';
import './Home.css';

function Home() {
  return (
    // main div of the website 
    <div className='parentDiv'> 
        {/* Section one content Hi image and intro text  */}
        <div className='section1-intro'>
                    {/* image showing memoji of hello guesture  */}
                    <img src={`${process.env.PUBLIC_URL}/memoji4.png`} alt="Description of Image" className='image-Hi' />
                    <div className='text-intro'>
                          <h1 className='text-title-namaste'>HELLO/NAMASTE</h1>
                          <h1 className='text-body-description'>
                          I'm currently working as a <span class="white-word">UI UX Specialist</span> at <span class="white-word">Neilsoft</span> in the Product Management division. 
                          In the past, I have worked as a freelancer on <span class="white-word"> Fiverr</span>, focusing on problem-solving from concept
                           to productization. I also have experience in <span class="white-word"> Entrepreneurship</span> within the software industry. 
                           As a product designer with a background in <span class="white-word"> IT Engineering</span>, I have created <span class="white-word"> 31+ product designs </span> 
                           for clients from <span class="white-word"> 8+ countries</span>.
                          </h1>
                    </div>           
        </div>
    </div>
    
  );
}

export default Home;
 