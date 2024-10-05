import React from 'react';
import Footer from './Footer';
import './Words.css';

function Words() {
  return (
    // main div of the website 
       
  <div className='fiverr-review-container'>
    
    <div className='ImageForTitle'> 
        <img src={`${process.env.PUBLIC_URL}/memoji3.png`}
         alt="Description of Image" className='Image-Memoji' />    
    </div>
    
    <div className='fiver-review-title'>
      <h className = "Words-title"> What Clients Say </h>
      <p className='Words-desc'> Here are some testimonials from my  <a href="https://www.fiverr.com/pathakprashant" target="_blank" class="link2">Fiverr profile</a> </p>
    </div>
    
    <div className='reviewImageGrid1'>
        <img src={`${process.env.PUBLIC_URL}/FiverrClientFeedback085.jpg`} alt="Description of Image" className='reviewImage' />
        <img src={`${process.env.PUBLIC_URL}/FiverrClientFeedback086.jpg`} alt="Description of Image" className='reviewImage' />
        <img src={`${process.env.PUBLIC_URL}/FiverrClientFeedback087.jpg`} alt="Description of Image" className='reviewImage' />
        <img src={`${process.env.PUBLIC_URL}/FiverrClientFeedback088.jpg`} alt="Description of Image" className='reviewImage' />
        <img src={`${process.env.PUBLIC_URL}/FiverrClientFeedback104.jpg`} alt="Description of Image" className='reviewImage' />
        <img src={`${process.env.PUBLIC_URL}/FiverrClientFeedback102.jpg`} alt="Description of Image" className='reviewImage' />
        <img src={`${process.env.PUBLIC_URL}/FiverrClientFeedback103.jpg`} alt="Description of Image" className='reviewImage' />
        <img src={`${process.env.PUBLIC_URL}/FiverrClientFeedback099.jpg`} alt="Description of Image" className='reviewImage' />
        <img src={`${process.env.PUBLIC_URL}/FiverrClientFeedback092.jpg`} alt="Description of Image" className='reviewImage' />
    </div>
        
    <div className='reviewImageGrid2'>
        <img src={`${process.env.PUBLIC_URL}/FiverrClientFeedback100.jpg`} alt="Description of Image" className='reviewImage' />
        <img src={`${process.env.PUBLIC_URL}/FiverrClientFeedback089.jpg`} alt="Description of Image" className='reviewImage' />
        <img src={`${process.env.PUBLIC_URL}/FiverrClientFeedback091.jpg`} alt="Description of Image" className='reviewImage' />
        <img src={`${process.env.PUBLIC_URL}/FiverrClientFeedback090.jpg`} alt="Description of Image" className='reviewImage' />
        <img src={`${process.env.PUBLIC_URL}/FiverrClientFeedback101.jpg`} alt="Description of Image" className='reviewImage' />
        <img src={`${process.env.PUBLIC_URL}/FiverrClientFeedback093.jpg`} alt="Description of Image" className='reviewImage' />
        <img src={`${process.env.PUBLIC_URL}/FiverrClientFeedback105.jpg`} alt="Description of Image" className='reviewImage' />
        <img src={`${process.env.PUBLIC_URL}/FiverrClientFeedback094.jpg`} alt="Description of Image" className='reviewImage' />
        <img src={`${process.env.PUBLIC_URL}/FiverrClientFeedback098.jpg`} alt="Description of Image" className='reviewImage' />    
    </div>

  </div>
  );
}

export default Words;
 