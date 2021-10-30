import React from 'react';
import logo from '../../../images/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';


const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="all col-md-6 col-12">
            <div className="footer-logo">
              <img src={logo} alt="" />
              <p>One of the most successful entrepreneurs featured at the Forbes website, Wendy Lipton said that "the success of your business would solely depend on you. said that when she was young she learned a very important business objective from her high school activity and that is to go out, explore, come back and explain how money is made in business. This is an objective she never forgot until she made millions for herself !!!</p>
            </div>

          </div>
          <div className="all col-md-6 col-12">
            <div className="tow-section">
              <div className="footer-all">
              <h5>Contact Us</h5>
              <ul>
                <li>Feel free to contact us if you have any question..
                </li>
                <li>sumonshakder1996@gmail.com</li>
                <li>Gaidghat, Simakhali, Bagharpara, Jessore, Khulna, Bangladesh</li>
              </ul>
            </div>
            <div className="footer-text">
                <h5>Our Services</h5>
                <ul>
                  <li>Pullup</li>
                  <li>Deadlift</li>
                  <li>Back Squat</li>
                  <li>Bench Press</li>
                  <li>Dumbbell romanian</li>
                </ul>
              </div>
            </div>


          </div> 
        </div>
        <div className="icon">
          <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://github.com/"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.youtube.com/channel/UCLD9CflKsqVox6JZLbKpt0Q"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
      </div>
    </div>


  );
};

export default Footer;