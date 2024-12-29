import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Ranger.css';


function Ranger() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="Ranger_container">

      {/* Section 1: Back Arrow */}
      <div className="Ranger_backicon">
      <div className='back-arrow' onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} /> 
        </div>
      </div>

      {/* Section 2: Title EASyWork and Subtitle */}
      <div className="Ranger_Header">
        Ranger
      </div>

      <div className="Ranger_Description">
      Digital twin based proprietary platform thats, Build the big picture of utilization & fuel consumption patterns across your diverse fleet with unmatched reports, analytics and advanced tools for in-depth analysis
      </div>

      {/* Section 3: Header Image includes 3 wireframe*/}
      {/* <div className="Ranger_HeaderImage">
       <img
    src={`${process.env.PUBLIC_URL}/ConstructMonitorLogo.JPG`}
    alt="Description of Image"
    className="Ranger_HeaderImage__img"/>
      </div> */}

      {/* Section 4: My role and Responsibility with time duration and tools */}
      <div className="Ranger_info_bg"></div>

      <div className="Ranger_section_left">
        {/* Left Column - Overview */}
        <div className="Ranger_TitleAndDescriptionGroup">
          <div className="Ranger_info_Title">My Role</div>
          <div className="Ranger_info_Description">
          UX Designer
          </div>
        </div>

        <div className="Ranger_TitleAndDescriptionGroup">
          <div className="Ranger_info_Title">Responsibilities</div>
          <div className="Ranger_info_Description">
          Led all stages of the UX design process, including user research, User Flow, information architecture, low-fidelity prototyping, high-fidelity prototyping. 
          </div>
        </div>

      </div>

      <div className="Ranger_section_right">
        {/* Right Column - Overview */}
        <div className="Ranger_TitleAndDescriptionGroup">
          <div className="Ranger_info_Title">Client</div>
          <div className="Ranger_info_Description">
            Orangecells
          </div>
        </div>

        <div className="Ranger_TitleAndDescriptionGroup">
          <div className="Ranger_info_Title">Tools</div>
          <div className="Ranger_info_Description">
            Figma, Balsamiq
          </div>
        </div>
      </div>

      {/* Section 5: Design Challange   */}
      <div className="Ranger_Header_Section5">
      Behind the scenes, a complex project unfolded. While the details remain confidential, the solution website and other link offers a peek into the final result.
      </div>

      {/* section 6 : Links  */}
      <div className='Ranger_Section8_HeaderImage'>
      <div className='link11'> 🔗 <a href="https://orangecells.com" target="_blank">https://orangecells.com</a>
        </div>

      </div>
  

  </div>

  );
}

export default Ranger;
