import React from 'react';
import './About.css';

function About() {
  return (
    <div className="container_aboutpage"> 
          
        <div className='box ProfilePic'>
        <img src={`${process.env.PUBLIC_URL}/ProfilePic.png`} alt="Description of Image" className='profilePic1' />
        <div className='imageText'>Yep, Thats me </div>
        </div>



        <div className='info1'>
          <h1 className='infoHeader'>
          Who am I?</h1>
          <p className='infoText'> I’m Prashant Pathak, a Product Designer with a passion for blending creativity and technology to deliver exceptional user experiences. Based in Pune, I bring over six years of experience across diverse domains, combining my IT engineering background with design expertise to craft solutions that solve real-world challenges.</p>
        </div>
        

        <div className='info2'>
          <h1 className='infoHeader'>
          What do I do?</h1>
          <p className='infoText'>I specialize in designing impactful and user-friendly digital products that bridge the gap between design and technology. At Neilsoft, I’ve had the opportunity to create end-to-end UX designs for innovative software solutions in the construction and energy sectors, driving efficiency and reducing costs. My work thrives at the intersection of strategy, collaboration, and design excellence.</p>

        </div>
        
        <div className='info3'>
          <h1 className='infoHeader'>
          
        What am I passionate about?</h1>
          <p className='infoText'>I’m deeply passionate about the power of design to transform how people interact with technology. From streamlining processes to making technology more accessible, I aim to create designs that are both meaningful and practical. Staying curious and exploring new trends allows me to push boundaries and ensure every design decision aligns with user needs and business goals.</p>

        </div>
   
        <h1 className='Title'>What do I do besides product designing?</h1>

        <div className='imagesGrid1'>
        <img src={`${process.env.PUBLIC_URL}/websitepic08.jpg`} alt="Description of Image" className='gridImages' />
        <img src={`${process.env.PUBLIC_URL}/websitepic22.jpg`} alt="Description of Image" className='gridImages' />
        <img src={`${process.env.PUBLIC_URL}/websitepic06.jpg`} alt="Description of Image" className='gridImages' />
        <img src={`${process.env.PUBLIC_URL}/websitepic04.jpg`} alt="Description of Image" className='gridImages' />
        <img src={`${process.env.PUBLIC_URL}/websitepic05.jpg`} alt="Description of Image" className='gridImages' />
        {/* <img src={`${process.env.PUBLIC_URL}/websitepic10.jpg`} alt="Description of Image" className='gridImages' /> */}
        <img src={`${process.env.PUBLIC_URL}/websitepic11.jpg`} alt="Description of Image" className='gridImages' />
        </div>
        
        <div className='imagesGrid2'>
        <img src={`${process.env.PUBLIC_URL}/websitepic01.jpg`} alt="Description of Image" className='gridImages' />
        <img src={`${process.env.PUBLIC_URL}/websitepic09.jpg`} alt="Description of Image" className='gridImages' />
        <img src={`${process.env.PUBLIC_URL}/websitepic03.jpg`} alt="Description of Image" className='gridImages' />
        <img src={`${process.env.PUBLIC_URL}/websitepic07.jpg`} alt="Description of Image" className='gridImages' />
        {/* <img src={`${process.env.PUBLIC_URL}/websitepic02.jpg`} alt="Description of Image" className='gridImages' /> */}
        <img src={`${process.env.PUBLIC_URL}/dubai.jpg`} alt="Description of Image" className='gridImages' />
        <img src={`${process.env.PUBLIC_URL}/websitepic21.jpg`} alt="Description of Image" className='gridImages' />
        </div>

    </div>
  );
}

export default About;
