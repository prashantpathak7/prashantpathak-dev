import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowDown } from 'react-icons/fi'; // Import the icon
import './Home.css';

function Home() {
  
  const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    navigate('/CS1');
    // window.open('/CS1', '_blank');
  };


  const handleKnowMoreClick2 = () => {
    navigate('/CS2');
  };


  const handleKnowMoreClick3 = () => {
    navigate('/CS3');
  };

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
        <div className='section2-intro'>
          <p>
          <FiArrowDown className='scroll-icon' /> {/* Icon before text */} Scroll down to explore more</p>
        </div>


        {/* **************************************** */}
        {/* Home page section 2, grid start  */}
        <div className='Container_HomePageCard' >
            {/* page title*/}
              <div className='Container_HomePageCard_title'>
                FEATURED WORK
              </div>
            
            {/* Card 1 */}
              <div className='Card1_Section_image'>
                  <div>
                      <img src={`${process.env.PUBLIC_URL}/EasyWorkCard.jpg`} alt="Description of Image"className='CardImage'/>
                  </div>
              </div>

        <div className='Card1_SectonInfo_Right'>
            <div className='CardTitle'>
                EasyWork
            </div>
            <div className='CardDescription'>
            Led the complete end-to-end UX design process for a web-based solution that digitizes workflows for government offices, resulting in increased speed, accountability, and transparency. 
            </div>
            <div className='button' onClick={handleKnowMoreClick}>
               Know More
            </div>
        </div>

      {/* Card 2 */}
        {/* <div className='Card2_Section_image'>
          <div>
            <img src={`${process.env.PUBLIC_URL}/ConstructMonitorLogo.JPG`} alt="Description of Image" className='CardImage' />
            </div>
          </div>

          <div className='Card2_SectonInfo_Right'>
          <div className='CardTitle'>Card Title</div>
          <div className='CardDescription'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, esse cillum dolore eu fugiat nulla pariatur. </div>
          <div className='button'>
          Know More
          </div>
      </div> */}

{/* Card 3 */}
{/* <div className='Card3_Section_image'>
<div>
<img src={`${process.env.PUBLIC_URL}/ConstructMonitorLogo.JPG`} alt="Description of Image" className='CardImage' />
</div>
</div>
<div className='Card3_SectonInfo_Right'>
    <div className='CardTitle'>Card Title</div>
    <div className='CardDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
  <div className='button'>
  Know More
  </div>
</div> */}
 </div>

</div> 
);
  
 
}

export default Home;
 