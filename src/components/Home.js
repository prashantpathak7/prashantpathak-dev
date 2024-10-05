import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  
  const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    navigate('/CS1');
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
            
        <div className='TestA'> 
        FEATURED WORK
        </div>
        <div className='caseStudyA'>
              <div className='CaseSTudyAImage'>
              <img src={`${process.env.PUBLIC_URL}/ConstructMonitorLogo.png`} alt="Description of Image" className='CM-LOGO' />
              </div>
          <div className='CaseStudyTextArea'>
              <div className='CaseStudyTitle'>
                ConstructMonitor 
              </div>
              <div className='CaseStudyDescription'>
              Streamline Success with Cloud-Based Construction Management Software, 
              Enhance Construction Quality and Progress Tracking
              </div>
              <div className='button' onClick={handleKnowMoreClick}>Know More</div>
          </div>
          
        </div>


        <div className='caseStudyA'>
              
          <div className='CaseStudyTextArea'>
              <div className='CaseStudyTitle'>
              CaseStudy-2 
              </div>
              <div className='CaseStudyDescription'>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </div>
              <div className='button'>Know More</div>
          </div>
          <div className='CaseSTudyAImage'>
              </div>
          
        </div>

        <div className='caseStudyA'>
              <div className='CaseSTudyAImage'>
              </div>
          <div className='CaseStudyTextArea'>
              <div className='CaseStudyTitle'>
              CaseStudy-3  
              </div>
              <div className='CaseStudyDescription'>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </div>
              <div className='button'>Know More</div>
          </div>
          
        </div>


        <div className='caseStudyA'>
              
          <div className='CaseStudyTextArea'>
              <div className='CaseStudyTitle'>
              CaseStudy-4 
              </div>
              <div className='CaseStudyDescription'>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </div>
              <div className='button'>Know More</div>
          </div>
          <div className='CaseSTudyAImage'>
              </div>
          
        </div>


        <div className='caseStudyA'>
              <div className='CaseSTudyAImage'>
              </div>
          <div className='CaseStudyTextArea'>
              <div className='CaseStudyTitle'>
              CaseStudy-5 
              </div>
              <div className='CaseStudyDescription'>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </div>
              <div className='button'>Know More</div>
          </div>
          
        </div>


        <div className='caseStudyA'>
              
          <div className='CaseStudyTextArea'>
              <div className='CaseStudyTitle'>
              CaseStudy-6 
              </div>
              <div className='CaseStudyDescription'>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </div>
              <div className='button'>Know More</div>
          </div>
          <div className='CaseSTudyAImage'>
              </div>
        </div>
    
    </div>
  );
}

export default Home;
 