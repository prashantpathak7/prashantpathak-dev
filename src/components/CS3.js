import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './CS3.css';

function CS3() {

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    // main div of the website        
  <div className='CS3-main-container'>
        {/* Back arrow icon in the top left */}
        <div className='back-arrow' onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} /> 
        </div>
        <div className='HeaderCS3'>
                 <div className='ConstructMonitor'>MeduLearn</div> 
                <div className='ConstructMonitor-Details'>It helps medical students and trainee doctors enhance their diagnostic skills using real-world medical visual data, like X-rays, sonograms and MRIs. Offering hands-on learning with the latest case studies.
                </div>
        </div>
        <div className='CS3-Role-BG-color'></div>
        <div className='CS3-Role-left-section'>
            <div className='role-title'>My Role</div>
            <div className='role-description'>UX Designer</div>

            <div className='role-title'>Responsibilities</div>
            <div className='role-description'> Led all stages of the UX design process, including user research, journey mapping, information architecture, low-fidelity prototyping, high-fidelity prototyping.</div>
        </div>

        <div className='CS3-Role-right-section'>
            <div className='role-title'>Client Location</div>
            <div className='role-description'>Sweden</div>


            <div className='role-title'>Duration</div>
            <div className='role-description'>Oct 2022 - Nov 2022</div>

            <div className='role-title'>Tools</div>
            <div className='role-description'> Figma, Zeplin</div>
        </div>
        <div className='CS3-Overview'>
                 <div className='CS3-Overview-Tag'>Overview</div>

                 <div className='CS3-Overview-Title'>This Platform Enhancing Diagnostic Skills Through Real-World Medical Imaging Data</div> 
                <div className='CS3-Overview-Desc'>MeduLearn is a platform designed to help medical students and trainee doctors enhance their diagnostic skills using hospital-generated data, such as X-rays, Sonography, MRIs, etc. This project was developed for a client from Sweden, a doctor and subject matter expert, who acted as the product owner. He had specific requirements to keep the app simple for development process, leading to the creation of one more simplified version. His primary focus was on ultrasound visuals.
                 After treatment, data like retinal imaging, X-rays, and ultrasound etc scans often go unused, but MeduLearn repurposes this data to, providing a practical, hands-on learning experience for trainee doctors and enhancing their diagnostic skills.
                </div>
        </div>
        
  </div>
  );
}

export default CS3;
 