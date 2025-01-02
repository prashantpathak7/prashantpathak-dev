import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './SG.css';


function SG() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="CS_SG_container">

    {/* Section 1: Back Arrow */}
    <div className="CS_SG_backicon">
    <div className='back-arrow' onClick={handleBackClick}>
        <FontAwesomeIcon icon={faArrowLeft} /> 
      </div>
    </div>

    {/* Section 2: Title EASyWork and Subtitle */}
    <div className="CS_SG_Header">
    Samarth Gavkari
    </div>

    <div className="CS_SG_Description">
    From concept to productization, I successfully completed the product design in a very short period. The client, who owned a regional newspaper, wanted a mobile app for their publication within a tight timeline.
     </div>

    {/* Section 3: Header Image includes 3 wireframe*/}
    <div className="CS_SG_HeaderImage">
     <img
  src={`${process.env.PUBLIC_URL}/cover.png`}
  alt="Description of Image"
  className="CS_SG_HeaderImage__img"/>
    </div>

    {/* Section 4: My role and Responsibility with time duration and tools */}
    <div className="CS_SG_info_bg"></div>

    <div className="CS_SG_section_left">
      {/* Left Column - Overview */}
      <div className="CS_SG_TitleAndDescriptionGroup">
        <div className="CS_SG_info_Title">My Role</div>
        <div className="CS_SG_info_Description">
        UX Researcher, User Flows, Wireframes. 
        </div>
      </div>

      <div className="CS_SG_TitleAndDescriptionGroup">
        <div className="CS_SG_info_Title">Tools</div>
        <div className="CS_SG_info_Description">
          Figma  <a
          href="https://www.figma.com/proto/BDpUGRFOR91eCzUyzF7oOk/SamarthGavkariApp?node-id=2-885&p=f&t=cs5B0rLGfnZGVHYq-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=2%3A885"
          target="_blank"
          rel="noopener noreferrer"
        >
          (View Prototype)
        </a>
        </div>
      </div>

      <div className="CS_SG_TitleAndDescriptionGroup">
        <div className="CS_SG_info_Title">Client</div>
        <div className="CS_SG_info_Description">
        Samarth Gavkari News Paper Publication 
        </div>
      </div>


    </div>

    <div className="CS_SG_section_right">
      {/* Right Column - Overview */}
      <div className="CS_SG_TitleAndDescriptionGroup">
        <div className="CS_SG_info_Title">Duration</div>
        <div className="CS_SG_info_Description">
          1 Week
        </div>
      </div>

      <div className="CS_SG_TitleAndDescriptionGroup">
        <div className="CS_SG_info_Title">Date</div>
        <div className="CS_SG_info_Description">
        January 2023
        </div>
      </div>
    </div>

    {/* Section 5: Design Challange   */}
    <div className="CS_SG_Header_Section5">
    Client Requiremnts
    </div>

    <div className="CS_SG_Description_Section5">
      <div className="CS_SG_BodyHeader">
      The client owns a regional newspaper and wants to create a mobile app with an ePaper feature. They need the mobile app's UX design completed within one week.
      </div>
      <p className='CS_SG_BodyText'>
      There are many other mobile applications in Marathi newspapers, but the unique feature that sets this one apart is the direct e-paper download option available in the settings, distinguishing it from the competition. The system also requires an admin module to post news and e-papers, which will be accessible in the mobile app.
      </p>
    
    </div>




    {/* Section 6  (Old8): Design Process */}

    <div className='CS_SG_Section7_Text_Left'>
      Design Process
      </div>
      <div className='CS_SG_Section7_Text_Right'>
          <p className='CS_SG_BodyText'>
          The client had a very tight deadline. Based on the requirements and after conducting a quick SWOT analysis of other newspaper apps, I created a basic flowchart and low-fidelity wireframes once they were finalized. To ensure a better understanding of how the app would function, I developed high-fidelity wireframes and a prototyping video."
          </p>
    </div> 
  {/* section 9 (Old 10) : User Flow */}

  <div className="CS_SG_Header_Section10">
  User Flow
    </div>

    <div className="CS_SG_Description_Section10">
    <p className='CS_SG_BodyText'>One basic flow was finalized with the client to define the product flow according to the requirements he provided, allowing the process to kick-start. (Please ignore the black background color, as it was initially designed for a dark theme to align better with the ultrasound machine interface.)
    </p>
    </div>


     
  {/* Section 10 (Old 11) : dashboard image  */}
  <div className="CS_SG_Section9_HeaderImage">  
  <img
  src={`${process.env.PUBLIC_URL}/SGFlow1.jpg`}
  alt="Description of Image"
  className="CS_SG_Section9_HeaderImage__img"/>

<img
  src={`${process.env.PUBLIC_URL}/SGFlow2.jpg`}
  alt="Description of Image"
  className="CS_SG_Section9_HeaderImage__img"/>
  </div>


{/* Section 11 :ABout phase 1 results  */}

  <div className="CS_SG_Header_Section10_2">
  Wireframes
    </div>

    <div className="CS_SG_Description_Section10_2">
    <p className='CS_SG_BodyText'>
    The following sketches, high-fidelity designs, and other deliverables were provided to the client for iteration and finalization of the product.
    </p>
    </div>


{/* Section 12 : Sketch image  */}
  <div className="CS_SG_Section12_HeaderImage">  
  <div className='CS_SG_image2_Description '>
   📌 Hand sketches for quick turnarounds based on the created flowchart.
  </div>
  <img
  src={`${process.env.PUBLIC_URL}/SGSketch.png`}
  alt="Description of Image"
  className="CS_SG_Section12_HeaderImage__img"/>
  </div>


 {/* Section 13 : Style Guide   */}
 <div className="CS_SG_Section13_HeaderImage">  
 <div className='CS_SG_image2_Description '>
 📌 Style guide for production-ready screens
  </div>
 <img
 src={`${process.env.PUBLIC_URL}/SGStyle.png`}
 alt="Description of Image"
 className="CS_SG_Section12_HeaderImage__img"/>
</div>




 {/* Section 14 : Final HiFi   */}
 <div className="CS_SG_Section14_HeaderImage">  
 <div className='CS_SG_image2_Description '>
  📌 The wireframes include both English and Marathi languages for the mobile application.  Also, you can see the prototype in Figma -{' '}
        <a
          href="https://www.figma.com/proto/BDpUGRFOR91eCzUyzF7oOk/SamarthGavkariApp?node-id=2-885&p=f&t=cs5B0rLGfnZGVHYq-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=2%3A885"
          target="_blank"
          rel="noopener noreferrer"
        >
          View in Figma
        </a>
 </div>
 <img
 src={`${process.env.PUBLIC_URL}/CGHIFI1.png`}
 alt="Description of Image"
 className="CS_SG_Section12_HeaderImage__img"/>

<img
 src={`${process.env.PUBLIC_URL}/CGHIFI2.png`}
 alt="Description of Image"
 className="CS_SG_Section12_HeaderImage__img"/>


<img
 src={`${process.env.PUBLIC_URL}/CGHIFI3.png`}
 alt="Description of Image"
 className="CS_SG_Section12_HeaderImage__img"/>


<img
 src={`${process.env.PUBLIC_URL}/CGHIFI4.png`}
 alt="Description of Image"
 className="CS_SG_Section12_HeaderImage__img"/>


<img
 src={`${process.env.PUBLIC_URL}/CGHIFI5-2.png`}
 alt="Description of Image"
 className="CS_SG_Section12_HeaderImage__img"/>
 

 
 

</div>

</div>
  );
}

export default SG;
