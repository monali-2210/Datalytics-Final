import React from 'react';
import { Button } from '../../Button/Button';
import './HeroSection.css';
import video from '../../../Assets/Videos/video.mp4';
import { Navigate } from 'react-router-dom';

function HeroSection() {

  // var user = firebase.auth().currentUser;
  const handleClick = () => {
    console.log("hello!");
    Navigate('/admin');
  }

  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>Automotive Industry</h1>
      <p>Are you ready to gear up your business with data analytics?</p>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;
