import React from 'react';
import {SubHeading} from '../../components';
import {images, data} from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='inquire'>
    <div className='app__wrapper_info'>
      <SubHeading title="Inquire"/>
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Request Recipe</h1>
      <div className='app__wrapper-content'>
        <p className='p__cormorant' style={{color: '#DCCA87', margin: '0.2rem 0'}}> Enter homemade dishes whose recipes you would like to see</p>
      </div>
      <div className='app__newsletter-input flex__center'>
      <input type='text' placeholder='Dish'/>
      </div>
      
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='find us' />
    </div>
  </div>
);

export default FindUs;
