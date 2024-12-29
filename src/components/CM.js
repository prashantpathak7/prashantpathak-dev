import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './CM.css';


function CM() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="CM_container">

      {/* Section 1: Back Arrow */}
      <div className="CM_backicon">
      <div className='back-arrow' onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} /> 
        </div>
      </div>

      {/* Section 2: Title EASyWork and Subtitle */}
      <div className="CM_Header">
        ConstructMonitor
      </div>

      <div className="CM_Description">
      Led the end-to-end UX design process for a SaaS-based solution that helps users stay on track and eliminate costly setbacks through advanced, cloud-based construction project management software. Featuring comprehensive monitoring and quality assurance, this platform enables proactive decision-making to prevent potential issues.
      </div>

      {/* Section 3: Header Image includes 3 wireframe*/}
      <div className="CM_HeaderImage">
       <img
    src={`${process.env.PUBLIC_URL}/ConstructMonitorLogo.JPG`}
    alt="Description of Image"
    className="CM_HeaderImage__img"/>
      </div>

      {/* Section 4: My role and Responsibility with time duration and tools */}
      <div className="CM_info_bg"></div>

      <div className="CM_section_left">
        {/* Left Column - Overview */}
        <div className="CM_TitleAndDescriptionGroup">
          <div className="CM_info_Title">My Role</div>
          <div className="CM_info_Description">
          UI UX Specialist
          </div>
        </div>

        <div className="CM_TitleAndDescriptionGroup">
          <div className="CM_info_Title">Responsibilities</div>
          <div className="CM_info_Description">
          Led all stages of the UX design process, including user research, journey mapping, information architecture, low-fidelity prototyping, high-fidelity prototyping, pseudo-code and detailed logic to guide the implementation of designed functionalities, design handoff and coordination, and solution testing after development. 
          </div>
        </div>

      </div>

      <div className="CM_section_right">
        {/* Right Column - Overview */}
        <div className="CM_TitleAndDescriptionGroup">
          <div className="CM_info_Title">Company</div>
          <div className="CM_info_Description">
            Neilsoft
          </div>
        </div>

        <div className="CM_TitleAndDescriptionGroup">
          <div className="CM_info_Title">Tools</div>
          <div className="CM_info_Description">
            Figma, D3.js
          </div>
        </div>
      </div>

      {/* Section 5: Design Challange   */}
      <div className="CM_Header_Section5">
      Behind the scenes, a complex project unfolded. While the details remain confidential, the solution website and other link offers a peek into the final result.
      </div>

      {/* section 6 : Links  */}
      <div className='CM_Section8_HeaderImage'>
      <div className='link11'> 🔗 <a href="https://constructmonitor.online" target="_blank"> www.constructmonitor.online</a>
        </div>

        <div className='link11'> 🔗 <a href="https://neilsoft.com/news/construct-monitor" target="_blank">https://neilsoft.com/news/construct-monitor</a>
        </div>

        <div className='link11'>🔗 <a href="https://apps.autodesk.com/RVT/en/Detail/Index?id=1109315387388313549&appLang=en&os=Web" target="_blank">https://apps.autodesk.com/RVT/en/Detail/Index?id=1109315387388313549&appLang=en&os=Web</a>
        </div>


        <div className='link11'> 🔗 <a href="https://www.thehindu.com/business/neilsoft-unveils-saas-solution-constructionmonitor-for-tracking-building-quality-progress/article68312234.ece      
        " target="_blank">https://www.thehindu.com/business/neilsoft-unveils-saas-solution-constructionmonitor-for-tracking-building-quality-progress/article68312234.ece      
        </a>
        </div>

      </div>
  

  </div>

  );
}

export default CM;
