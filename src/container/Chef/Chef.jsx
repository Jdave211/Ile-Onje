import React from 'react';
import {images} from '../../constants'
import {SubHeading} from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef'/>
      </div>
      <div className='app__wrapper_info'>
        <SubHeading title="Chef's World"/>
        <h1 className='headtext__cormorant'>What We Believe In</h1>

        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt='quote'/>
            <p className='p__opensans'>What Was</p>
          </div>
          <p className='p__opensans'>He Cooking?</p>
        </div>
        <div className='app__chef-sign'> 
        <p className='p__cormorant'>Dave Jaga</p>
        <p className='p__opensans'>Chef and Cofounder</p>
        <img src={images.sign} alt='signature'/>
        </div>
      </div>
  </div>
);

export default Chef;
