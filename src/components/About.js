import React from 'react';
import './About.css';

function About() {
  return (
    <div className="container"> 
        <div className='box ProfilePic'>
        <img src={`${process.env.PUBLIC_URL}/profilePic.png`} alt="Description of Image" className='profilePic1' />
        <p>Yep, Thats me </p>
        </div>

        <div className='info1'>
          <h1 className='infoHeader'>
          Who am I?</h1>
          <p className='infoText'>My name is Prashant, and I’m a Product Designer based in Pune with a background in IT engineering. I specialize in crafting intuitive and innovative user experiences, blending technical expertise with creative solutions to solve complex problems.</p>

        </div>

        <div className='info2'>
          <h1 className='infoHeader'>
          What do I do?</h1>
          <p className='infoText'>As a technology enthusiast, I design seamless and user-friendly digital experiences. My IT engineering background allows me to approach design from both a technical and user-centered perspective. Currently, I'm working at Neilsoft, where I integrate diverse cultural insights to create impactful solutions.</p>

        </div>

        <div className='info3'>
          <h1 className='infoHeader'>
          
        What am I passionate about?</h1>
          <p className='infoText'>I'm passionate about creating user-centered designs that improve how people interact with technology. I love exploring new design trends and technologies to push the limits of what’s possible, ensuring every design decision is focused on enhancing the user experience and making a meaningful impact.</p>

        </div>
        <div className='Title' >
        Behind the scenes</div>

        <div className='imagesGrid1'>
        <img src={`${process.env.PUBLIC_URL}/websitepic08.jpg`} alt="Description of Image" className='gridImages' />
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
        <img src={`${process.env.PUBLIC_URL}/websitepic12.jpg`} alt="Description of Image" className='gridImages' />
        </div>

    </div>
  );
}

export default About;
