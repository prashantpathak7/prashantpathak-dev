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

      {/* Section 2: Title EASyWork and Subtitle */}
      <div className="page3_Header">
        EasyWork
      </div>

      <div className="page3_Description">
      As part of a startup, I was responsible for the end-to-end product design of an e-governance solution tailored for government offices. The product enhances speed, accountability, and transparency.
      </div>

      {/* Section 3: Header Image includes 3 wireframe*/}
      <div className="page3_HeaderImage">
       <img
    src={`${process.env.PUBLIC_URL}/EasyWorkCard3.jpg`}
    alt="Description of Image"
    className="page3_HeaderImage__img"/>
      </div>

      {/* Section 4: My role and Responsibility with time duration and tools */}
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
            Keynote, Balsamiq, Adobe XD, Trello, PowerPoint, Zeplin, Figma 
          </div>
        </div>

      </div>

      <div className="page3_section_right">
        {/* Right Column - Overview */}
        <div className="page3_TitleAndDescriptionGroup">
          <div className="page3_info_Title">Duration</div>
          <div className="page3_info_Description">
            3 Years
          </div>
        </div>

        <div className="page3_TitleAndDescriptionGroup">
          <div className="page3_info_Title">Date</div>
          <div className="page3_info_Description">
            June 2018 - May 2021
          </div>
        </div>
      </div>

      {/* Section 5: Design Challange   */}
      <div className="page3_Header_Section5">
      Design Challenge
      </div>

      <div className="page3_Description_Section5">
        <div className="page3_BodyHeader">
        How might we help Government Employees and Officers provide better service to Citizens while optimizing their workload to Increase Efficiency?
        </div>
        <p className='page3_BodyText'>
        The project’s ambitious goal was to create a <span class="page3_BodyText_Highlight"> scalable, adaptable solution</span> for government offices—one that could enhance service delivery while <span class="page3_BodyText_Highlight"> reducing workload</span>, all <span class="page3_BodyText_Highlight"> without disrupting their existing work patterns and standards.</span>
        </p>
        <p className='page3_BodyText'>
        As part of the startup and UX designer, I led a comprehensive research journey to uncover the core challenges faced by government employees. Through user interviews, observations, and workflow analyses, several key issues surfaced: <span class="page3_BodyText_Highlight"> A vast number of files and documents are difficult to organize and search, resulting in inefficiencies caused by manual processes, insufficient bandwidth to handle heavy workloads, and fragmented communication channels, among other issues.
        </span>
        </p>
      </div>

       
    {/* Section 6 : Image for userpainpoint  */}
    <div className="page3_Section8_HeaderImage">  
    <img
    src={`${process.env.PUBLIC_URL}/Group134-2.png`}
    alt="Description of Image"
    className="page3_Section8_HeaderImage__img"/>
      </div>


      {/* Section 7 : Query from officers Image*/}
      <div className='page3_SectionOfficerQuery_background'>
      </div>

      <div className='page3_SectionOfficerQuery_Image'>
        <img
      src={`${process.env.PUBLIC_URL}/Frame128.png`}
      alt="Description of Image"
      className="page3_Section8_HeaderImage__img"/>
      
      </div>


      {/* Section 8: Design Process */}

      <div className='page3_Section7_Text_Left'>
        Design Process
        </div>
        <div className='page3_Section7_Text_Right'>
            <p>It is a <span class="page3_BodyText_Highlight"> Non-linear, Iterative Approach</span> that helps improve the product. We develop the product in two phases. In the first phase, we deploy some functionality on a pilot basis. The second phase involves delivering a partial solution. For both phases, we used the same process, as outlined below.
            In the following diagram, my roles and responsibilities are highlighted in green text.
            </p>
      </div> 

      <div className="page3_Section7_HeaderImage">
       <img
    src={`${process.env.PUBLIC_URL}/UX_Process.png`}
    alt="Description of Image"
    className="page3_Section7_HeaderImage__img"/>
      </div>



      {/* Section 9: Key Insights from research */}
      <div className='page3_Section6_background'>
      </div>

      <div className='page3_Section6_Text'>
        <p className='page3_Section6_Header'>A Key Insight emerged during Research</p>
            <p>Nearly every government office relied heavily on an <span class="page3_BodyText_Highlight"> Inward-Outward notebook.</span> This notebook is essentially a simple log where a person short note about incoming and outgoing letters, including who they are from and to whom they are addressed. This physical logbook served as a <span class="page3_BodyText_Highlight"> critical backbone</span> for their operations. Recognizing its importance, I made it the <span class="page3_BodyText_Highlight"> cornerstone of Design Strategy.</span>
            </p>
            </div>

    {/* section 10 :ABout phase 1 results  */}

    <div className="page3_Header_Section10">
    Impact of Phase 1
      </div>

      <div className="page3_Description_Section10">
         We <span class="page3_BodyText_Highlight"> deployed Phase 1 of the product on a pilot basis</span> in some offices. Below are the key screens and the impact of our solution.
      </div>


       
    {/* Section 11 : dashboard image  */}
    <div className="page3_Section9_HeaderImage">  
    <div className='page3_image1_Description '>
     📌 The dashboard presented below is the flagship output of the solution. It functions as a digital twin of the office's performance, empowering officers to know the exact status of the office with just a glance at a single page 
    </div>
    <img
    src={`${process.env.PUBLIC_URL}/SummeryBoard5.png`}
    alt="Description of Image"
    className="page3_Section9_HeaderImage__img"/>
    </div>

         
    {/* Section 12 : Admin image  */}
    <div className="page3_Section12_HeaderImage">  
    <div className='page3_image2_Description '>
     📌 This is a overview of the theme, setting panel within the admin login.
    </div>
    <img
    src={`${process.env.PUBLIC_URL}/Registry-2.png`}
    alt="Description of Image"
    className="page3_Section12_HeaderImage__img"/>
      </div>


         
    {/* Section 13 : Registry image  */}
    <div className="page3_Section13_HeaderImage">  
    <div className='page3_image2_Description '>
     📌 Registry displaying a list of all applications, letters, and files, with multiple filters to search for any item instantly. It also shows their status and all the required details.
    </div>
    <img
    src={`${process.env.PUBLIC_URL}/RegistryFilter.png`}
    alt="Description of Image"
    className="page3_Section13_HeaderImage__img"/>
      </div>

    
    {/* Section 14 : File colour image  */}
    <div className="page3_Section14_HeaderImage">  
    <div className='page3_image2_Description '>
    <p>📌  I do not limit the 'User Experience' to digital products alone;
    </p> 
    <p className='page3_info_Description'>I also enhance and categorize physical file colors. This approach allows employees to identify the type of file just by its color from a distance. For example, in the following image, yellow indicates student-related files, while pink represents election-related files. Additionally, the solution reflects these color codes in the software system, enabling the admin to customize the colors as needed. This approach <span class="page3_BodyText_Highlight">not only reduces the cost of traditional file but also eliminates the need for barcode stickers.</span> Instead, the system directly prints the barcode and other details on the front page of the file. This results in both <span class="page3_BodyText_Highlight">cost reduction and improved efficiency </span> in locating multiple files
    </p>
    </div>
    
    <img
    src={`${process.env.PUBLIC_URL}/filecolor.png`}
    alt="Description of Image"
    className="page3_Section14_HeaderImage__img"/>
      </div>


   {/* Section 15 : rack image  */}
   <div className="page3_Section15_HeaderImage">  
    <div className='page3_image2_Description '>
    <p>📌 Introduced a Rack System that informs users about the  physical location of files and documents in the office.
    </p>
    <p className='page3_info_Description'>    This system provides details about the status of physical files and their placement. I wore multiple hats in this project. Alongside working as a UX designer, I also contributed as a UX engineer and product strategist. Initially, developers faced challenges in implementing the system without using physical sensors to track the location of files. However, I <span class="page3_BodyText_Highlight">supported the developers by designing the logic and creating pseudocode, enabling the functionality to identify which file is placed in which section without relying on sensors.</span>
</p>

    </div>
    <img
    src={`${process.env.PUBLIC_URL}/Rack.png`}
    alt="Description of Image"
    className="page3_Section15_HeaderImage__img"/>
  </div>
    


       {/* Section 16 : Forgot Password  */}
   <div className="page3_Section16_HeaderImage">  
    <div className='page3_image2_Description '>
    <p>📌 Reset Password Using OTP Without Internet Access on the User's Computer
    </p>
    <p className='page3_info_Description'> 
      That time (Before the COVID-19 pandemic), many government offices restricted internet access for various reasons. allso the dont want to reset users passowrd by admin due to privacy issue. To address the challenge of resetting passwords using OTPs in such environments, I designed a functionality. When a user clicks the "Forgot Password" option on a machine without internet access, the system generates and displays a QR code. This QR code contains a link with encrypted data. The user scans the QR code using an internet-enabled mobile device, which redirects the encrypted data to the server. The server processes the request and sends the OTP to the user's registered mobile number. The user then enters the received OTP into their machine. The machine verifies the OTP using pre-encrypted calculations, ensuring secure and seamless password recovery without requiring direct internet access on the user’s machine.
    </p>

    </div>
    <img
    src={`${process.env.PUBLIC_URL}/FlowOfflineOTP.jpg`}
    alt="Description of Image"
    className="page3_Section16_HeaderImage__img"/>
  </div>
    
  
   {/* Section 17 : answer from officers Image*/}
  <div className='page3_SectionOfficerAnswer_background'>
  </div>

  <div className='page3_SectionOfficerAnswer_Image'>
  <img
      src={`${process.env.PUBLIC_URL}/officer_Positive-2.png`}
      alt="Description of Image"
      className="page3_Section8_HeaderImage__img"/>
      
  </div>  


   {/* Section 18 : problems in phase one */}
  <div className="page3_Header_Section18">
    Issues in Phase 1
  </div>

  <div className="page3_Description_Section18">
      there are  <span class="page3_BodyText_Highlight"> some issue we found</span> after implementation of phase 1. which required the focus in phase 2 implementation. 
  </div>


  {/* Section 19 : Problem 1  */}
  <div className="page3_Section19_HeaderImage">  
  <div className='page3_image2_Description '>
  <p>📌 Some application and file flows are missing.
  </p>
  <p className='page3_info_Description'> 
  The application requires an inward entry for processing outward tasks. When an outward task is marked as complete, it relies on the corresponding inward entry. Using this approach, we can calculate the percentage of completion. In <span class="page3_BodyText_Highlight"> most cases (around 80% - 90%), this workflow operates as expected</span>. However, there are some exceptions where the are doing manual work becuase system not addressing it directly.
  </p>
  <p className='page3_info_Description'>
Outward Without Inward:
In some cases, there is only an outward entry because the letter is generated directly by the office, and no inward entry exists for it. In such cases, the system does not have an inward entry to associate with the outward task, which creates inconsistencies.
</p>
<p className='page3_info_Description'> 
Inward Without Outward:
There are cases where an inward entry exists, but no outward task is required. These entries remain marked as "pending" indefinitely, which increases the pendency count, even though there is no actual pending task.
</p>
<p className='page3_info_Description'>
Inward with Multiple Outwards:
Some inward entries require multiple outward tasks. However, the system currently marks the inward as "completed" after a single outward task is completed, even though additional outward tasks may still be pending. 
  </p>

  </div>
  </div>


  {/* Section 20 : Problem 1 image */}
  <div className="page3_Section20_HeaderImage">
       <img
    src={`${process.env.PUBLIC_URL}/Issue1.png`}
    alt="Description of Image"
    className="page3_Section20_HeaderImage__img"/>
  </div>


  {/* Section 21 : Problem 2  text */}
  <div className="page3_Section21_HeaderImage">  
  <div className='page3_image2_Description '>
  <p>📌 Safety and Security 
  </p>
  <p className='page3_info_Description'> 
  We found certain practices that disturb the system. Some individuals use corrupted PDFs instead of valid ones. The server is hosted locally using a simple Apache Tomcat setup, which extracts the WAR file onto the local drive, making it easy to access. The database is also set up locally. Changes were found in the locally hosted files that differed from the original ones, leading to significant security and safety issues in the tampered systems. Backdated entries were discovered, caused by someone changing the server date. Additionally, several issues were identified that directly impacted data integrity and found unexpected changes. 
  </p>

  </div>
  </div>


  {/* Section 22 : Problem 2 image */}
  {/* <div className="page3_Section22_HeaderImage">
       <img
    src={`${process.env.PUBLIC_URL}/UX_Process.png`}
    alt="Description of Image"
    className="page3_Section22_HeaderImage__img"/>
  </div> */}


  {/* Section 23 : Problem 3  text */}
  <div className="page3_Section23_HeaderImage">  
  <div className='page3_image2_Description '>
  <p>📌 Some part of office still uncovered
  </p>
  <p className='page3_info_Description'> 
  currently system give access to inward and outward employee also with all officer and branch officers for viewing only. but no any access for thier divisional level employee   
  </p>

  </div>
  </div>


  {/* Section 24 : Problem 3 image */}
  {/* <div className="page3_Section24_HeaderImage">
       <img
    src={`${process.env.PUBLIC_URL}/UX_Process.png`}
    alt="Description of Image"
    className="page3_Section24_HeaderImage__img"/>
  </div> */}

{/* Section 25 : Key Insights from research */}
<div className='page3_Section25_background'>
      </div>

      <div className='page3_Section25_Text'>
        <p className='page3_Section25_Header'></p>
        <p>
        From the implementation of Phase 1, we found many advantages, but there are still some ongoing challenges. Our main goal for Phase 2 is to connect all offices and establish a communication bridge between them to reduce communication time. Additionally, departments within the same hierarchy should have real-time access to status updates. For example, officers in the Chief Minister's office will be able to know the status of activities at the taluka level with a simple click. 
        </p>
      </div>



{/* phase 2 start */}

{/* Section 26 : phase 2 tag line */}
<div className="page3_Header_Section26">
    Phase 2 Highlishts
  </div>

  <div className="page3_Description_Section26">
      some parts from the phase 2 is deployed and most of the part was in develpment process. but from the wireframe and partial developed part gets good response after presenting to the potential customer. 
  </div>


  {/* Section 27 : Problem 1 text  */}
  <div className="page3_Section27_HeaderImage">  
  <div className='page3_image2_Description '>
  <p>📌 Flow Chart
  </p>
  <p className='page3_info_Description'>  
  Officers and employees have the same functionality, but the difference lies in their permissions. Officers have access to insights from all offices, while employees can only access insights that fall under their jurisdiction.  </p>
  </div>
  </div>


  {/* Section 28 : Problem 1 image */}
  <div className="page3_Section28_HeaderImage">
       <img
    src={`${process.env.PUBLIC_URL}/FlowChart.jpg`}
    alt="Description of Image"
    className="page3_Section28_HeaderImage__img"/>
  </div>



  {/* Section 29 : Problem 2 text  */}
  {/* <div className="page3_Section29_HeaderImage">  
  <div className='page3_image2_Description '>
  <p>📌 LoFi from Balsamique 
  </p>
  <p className='page3_info_Description'> 
  that time used balsamique to show instant mockups 
  </p>

  </div>
  </div>
 */}

  {/* Section 30 : Problem 2 image */}
  {/* <div className="page3_Section30_HeaderImage">
       <img
    src={`${process.env.PUBLIC_URL}/U.png`}
    alt="Description of Image"
    className="page3_Section30_HeaderImage__img"/>
  </div>

 */}

  {/* Section 31 : wireframe text  */}
  <div className="page3_Section31_HeaderImage">  
  <div className='page3_image2_Description '>
  <p>📌 wireframes 
  </p>
  <p className='page3_info_Description'> 
  Key wireframes from phase 2  
  </p>

  </div>
  </div>


  {/* Section 32 : wireframe  image 1*/}
  <div className="page3_Section32_HeaderImage">
       <img
    src={`${process.env.PUBLIC_URL}/Wireframe 1.png`}
    alt="Description of Image"
    className="page3_Section32_HeaderImage__img"/>
  </div>

  {/* Section 33 : wireframe  image 2 */}
  <div className="page3_Section33_HeaderImage">
       <img
    src={`${process.env.PUBLIC_URL}/Wireframe 2.png`}
    alt="Description of Image"
    className="page3_Section33_HeaderImage__img"/>
  </div>

  {/* Section 34 : wireframe  image 3 */}
  <div className="page3_Section34_HeaderImage">
       <img
    src={`${process.env.PUBLIC_URL}/Wireframe 3.png`}
    alt="Description of Image"
    className="page3_Section33_HeaderImage__img"/>
  </div>


  {/* Section 35 : wireframe  image 4 */}
  <div className="page3_Section35_HeaderImage">
       <img
    src={`${process.env.PUBLIC_URL}/Wireframe 4.png`}
    alt="Description of Image"
    className="page3_Section33_HeaderImage__img"/>
  </div>


  {/* Section 36 : wireframe  image 5 */}
  <div className="page3_Section36_HeaderImage">
       <img
    src={`${process.env.PUBLIC_URL}/Wireframe 5.png`}
    alt="Description of Image"
    className="page3_Section33_HeaderImage__img"/>
  </div>

  {/* Section 37 : wireframe  image 6 */}
  <div className="page3_Section37_HeaderImage">
       <img
    src={`${process.env.PUBLIC_URL}/Wireframe 6.png`}
    alt="Description of Image"
    className="page3_Section33_HeaderImage__img"/>
  </div>

  {/* Section 38 : wireframe  image 7 */}
  <div className="page3_Section38_HeaderImage">
       <img
    src={`${process.env.PUBLIC_URL}/Wireframe 7.png`}
    alt="Description of Image"
    className="page3_Section33_HeaderImage__img"/>
  </div>


  </div>

  );
}

export default CS1;
