import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './CS2.css';

function CS2() {

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    // main div of the website        
  <div className='CS1-main-container'>
        {/* Back arrow icon in the top left */}
        <div className='back-arrow' onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} /> 
        </div>
        <div className='HeaderCS1'>
                 <div className='ConstructMonitor'>Ranger by Orngecells Lab</div> 
                <div className='ConstructMonitor-Details'>Digital twin based proprietary platform thats, Build the big picture of utilization & fuel consumption patterns across your diverse fleet with unmatched reports, analytics and advanced tools for in-depth analysis</div> 
        </div>
        <div className='Role-BG-color'></div>
        <div className='Role-left-section'>
            <div className='role-title'>My Role</div>
            <div className='role-description'>UI UX Specialist</div>

            <div className='role-title'>Responsibilities</div>
            <div className='role-description'> Led all stages of the UX design process, including user research, journey mapping, information architecture, low-fidelity prototyping, high-fidelity prototyping, design handoff and coordination, and solution testing after development.</div>
        </div>

        <div className='title-about-NDA'>Behind the scenes, a complex project unfolded. While the details remain confidential, the solution website and other link offers a peek into the final result.</div>

        <div className='link1'> <a href="www.constructmonitor.online" target="_blank">www.constructmonitor.online</a>
        </div>

        <div className='link2'> <a href="https://neilsoft.com/news/construct-monitor" target="_blank">https://neilsoft.com/news/construct-monitor</a>
        </div>

        <div className='link3'> <a href="https://apps.autodesk.com/RVT/en/Detail/Index?id=1109315387388313549&appLang=en&os=Web" target="_blank">https://apps.autodesk.com/RVT/en/Detail/Index?id=1109315387388313549&appLang=en&os=Web</a>
        </div>


        <div className='link4'> <a href="https://www.thehindu.com/business/neilsoft-unveils-saas-solution-constructionmonitor-for-tracking-building-quality-progress/article68312234.ece      
        " target="_blank">https://www.thehindu.com/business/neilsoft-unveils-saas-solution-constructionmonitor-for-tracking-building-quality-progress/article68312234.ece      
        </a>
        </div>


        {/* <div className='Role-right-section'>
            <div className='role-title'>Title</div>
            <div className='role-description'>SubTitle</div>
        </div> */}
  </div>
  );
}

export default CS2;
 