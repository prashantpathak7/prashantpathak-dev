import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './CS1.css';


function CS1() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="page3_container">

      {/* Section 1: Back Arrow */}
      <div className="page3_backicon">
      <div className='back-arrow' onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} /> 
        </div>
      </div>

      {/* Section 2: Title and Subtitle */}
      <div className="page3_Header">
        EasyWork
      </div>

      <div className="page3_Description">
      As part of a startup, I was responsible for the end-to-end product design of an e-governance solution tailored for government offices. The product enhances speed, accountability, and transparency.
      </div>

      {/* Section 3: Header Image */}
      <div className="page3_HeaderImage">
       <img
    src={`${process.env.PUBLIC_URL}/EasyWorkCard-2.jpg`}
    alt="Description of Image"
    className="page3_HeaderImage__img"/>
      </div>

      {/* Section 4: Background Colour and Overview Section */}
      <div className="page3_info_bg"></div>

      <div className="page3_section_left">
        {/* Left Column - Overview */}
        <div className="page3_TitleAndDescriptionGroup">
          <div className="page3_info_Title">My Role</div>
          <div className="page3_info_Description">
          UX Researcher, User Flows, User Journey, Paper Prototyping, Wireframes, Product Strategist, Project Management. 
          </div>
        </div>

        <div className="page3_TitleAndDescriptionGroup">
          <div className="page3_info_Title">Tools</div>
          <div className="page3_info_Description">
            Keynote, Balsamiq, Adobe XD, Trello, PowerPoint 
          </div>
        </div>

      </div>

      <div className="page3_section_right">
        {/* Right Column - Overview */}
        <div className="page3_TitleAndDescriptionGroup">
          <div className="page3_info_Title">Duration</div>
          <div className="page3_info_Description">
            2 Years
          </div>
        </div>

        <div className="page3_TitleAndDescriptionGroup">
          <div className="page3_info_Title">Date</div>
          <div className="page3_info_Description">
            June 2018 - May 2020
          </div>
        </div>
      </div>

      {/* Section 5: Overview One and Two */}
      <div className="page3_Header_Section5">
      Design Challenge
      </div>

      <div className="page3_Description_Section5">
        <div className="page3_BodyHeader">
        How might we help government employees and officers provide better service to citizens while optimizing their workload to increase efficiency?
        </div>
        <p className='page3_BodyText'>
        The project’s ambitious goal was to create a <span class="page3_BodyText_Highlight"> scalable, adaptable solution</span> for government offices—one that could enhance service delivery while <span class="page3_BodyText_Highlight"> reducing workload</span>, all <span class="page3_BodyText_Highlight"> without disrupting their existing work patterns and standards.</span>
        </p>
        <p className='page3_BodyText'>
        As part of the startup and UX designer, I led a comprehensive research journey to uncover the core challenges faced by government employees. Through user interviews, observations, and workflow analyses, several key issues surfaced: <span class="page3_BodyText_Highlight"> A vast number of files and documents are difficult to organize and search, resulting in inefficiencies caused by manual processes, insufficient bandwidth to handle heavy workloads, and fragmented communication channels, among other issues.
        </span>
        </p>
        <p className='page3_BodyText'>
        The final solution resulted in significant improvements, including increased <span class="page3_BodyText_Highlight"> speed, accountability, and transparency.</span>
        </p>
      </div>

      {/* Section 6: Quote from officers */}
      <div className='page3_Section6_background'>
      </div>

      <div className='page3_Section6_Text'>
        <p className='page3_Section6_Header'>A key insight emerged during research</p>
            <p>"Nearly every government office relied heavily on an Inward-Outward Notebook. This notebook is essentially a simple log where a person short note about incoming and outgoing letters, including who they are from and to whom they are addressed. This physical logbook served as a critical backbone for their operations. Recognizing its importance, I made it the cornerstone of design strategy."
            </p>
            </div>

      {/* Section 7: Process */}

      <div className='page3_Section7_Text'>
        <p className='page3_Section7_Header'>Process</p>
            <p>This is my design process and the roles I performed. This is a non-linear, iterative process that helps make the product better. In the following diagram, my roles and responsibilities are highlighted in green text color.
            </p>
      </div> 

      <div className="page3_Section7_HeaderImage">
       <img
    src={`${process.env.PUBLIC_URL}/UX_Process.png`}
    alt="Description of Image"
    className="page3_Section7_HeaderImage__img"/>
      </div>

    </div>
  );
}

export default CS1;
