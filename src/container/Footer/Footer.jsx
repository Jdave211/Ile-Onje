import React from 'react';
import{FooterOverlay, Newsletter} from '../../components';
import{FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import{images} from '../../constants'

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Toronto,Canada</p>
        <p className='p__opensans'>jagadave21@gmail.com</p>
      </div>
        <div className='app__footer-links_logo'>
            <img src={images.mylogo} alt='footer_logo'/>
            <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others."</p>
            <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop: 15}}/>
            <div className='app__footer-links_icons'>
              <a href='https://www.facebook.com/' target="_blank" rel="noreferrer">
              <FiFacebook />
              </a>
              <a href='https://www.instagram.com/' target="_blank" rel="noreferrer">
              <FiInstagram />
              </a>
              <a href='https://www.twitter.com/' target="_blank" rel="noreferrer">
              <FiTwitter />
              </a>
            </div>
        </div>
        <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'> Mon-Fri: 10am-6pm</p>
        <p className='p__opensans'> Sat-Sun: 11am-8pm</p>
        </div>
      </div>
      <div className='footer__copyright'>
        <p className='p__opensans'>2023 Ile-Onje. All Rights Reserved</p>
      </div>
    </div>
);

export default Footer;
