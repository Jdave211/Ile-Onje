import React from 'react';
import{images} from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.J} alt='i letter'/>
    </div>
    <div className='app__aboutus-overlay2 flex__center'>
      <img src={images.G} alt='j letter'/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans' style={{color:'white'}}>That meal you go to your favorite restaurant to eat? We've got it, if we don't, then just make a request for it's recipe. At Ile Onje, we believe in simplicity in service. That is why all our recipes are provided in an easy to read manner with ingredient expenses by the side.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about_knife'/>
      </div>
      
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans' style={{color:'white'}}>Founded in the 21st century, we at Ile Onje started with a dream that every household know how to be self sufficient in terms of healthy, nutritious and tasty meals.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
