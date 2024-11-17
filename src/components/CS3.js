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
    <div></div>
//     // main div of the website        
//   <div className='CS3-main-container'>
//         {/* Back arrow icon in the top left */}
//         <div className='back-arrow' onClick={handleBackClick}>
//           <FontAwesomeIcon icon={faArrowLeft} /> 
//         </div>
//         <div className='HeaderCS3'>
//                  <div className='CaseStudyTitle'>Learn POCUS</div> 
//                 <div className='CaseStudyDescription'>
//                 Designed a UX solution for a Swedish client, encompassing both a web app and a mobile app. The platform empowers medical students and trainee doctors to enhance their diagnostic skills by providing access to real-world medical visual data, such as X-rays, sonograms, and MRIs. It offers hands-on learning opportunities through the latest case studies, enabling users to gain practical experience and deepen their understanding of medical diagnostics.
//                 </div>
//         </div>
//         <div className='CS3-Role-BG-color'></div>
//         <div className='CS3-Role-left-section'>
//             <div className='role-title'>My Role</div>
//             <div className='role-description'>UX Designer</div>

//             <div className='role-title'>Responsibilities</div>
//             <div className='role-description'> Led all stages of the UX design process, including user research, journey mapping, information architecture, low-fidelity prototyping, high-fidelity prototyping.</div>
//         </div>

//         <div className='CS3-Role-right-section'>
//             <div className='role-title'>Client Location</div>
//             <div className='role-description'>Sweden</div>


//             <div className='role-title'>Duration</div>
//             <div className='role-description'>Oct 2022 - Nov 2022</div>

//             <div className='role-title'>Tools</div>
//             <div className='role-description'> Figma, Zeplin</div>
//         </div>
//         <div className='CS3-Overview'>
//                  <div className='CS3-Overview-Tag'>Overview</div>

//                  <div className='CS3-Overview-Title'>This Platform Enhancing Diagnostic Skills Through Real-World Medical Imaging Data</div> 
//                 <div className='CS3-Overview-Desc'>MeduLearn is a platform designed to help medical students and trainee doctors enhance their diagnostic skills using hospital-generated data, such as X-rays, Sonography, MRIs, etc. This project was developed for a client from Sweden, a doctor and subject matter expert, who acted as the product owner. He had specific requirements to keep the app simple for development process, leading to the creation of one more simplified version. His primary focus was on ultrasound visuals.
//                  After treatment, data like retinal imaging, X-rays, and ultrasound etc scans often go unused, but MeduLearn repurposes this data to, providing a practical, hands-on learning experience for trainee doctors and enhancing their diagnostic skills.
//                 </div>
//         </div>
//         {/* ------------- CS3 audience ---------*/}
//         <div className='CS3-Audience'>        </div>
//         <div className='CS3-Audience-Tag CS3-Overview-Tag'>Target Users Demographics</div>
//         <div className='CS3-Audience-left-section'>
//             <div className='role-title'>Profession</div>
//             <div className='role-description'>Trainee Doctor & Medical Student</div>


//             <div className='role-title'>Goal</div>
//             <div className='role-description'>Improving diagnostic accuracy and gaining confidence in Visual interpretation,</div>
// </div>

//         <div className='CS3-Audience-right-section'>
//             <div className='role-title'>Average Age Group</div>
//             <div className='role-description'>18 Years - 38 Years</div>


//             <div className='role-title'>Location</div>
//             <div className='role-description'> Sweden</div>
        

             
//         </div>
        
        
//   </div>
  );
}

export default CS3;
 