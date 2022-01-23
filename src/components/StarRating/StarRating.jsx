import React from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';

function StarRating() {
  const images = {
    white: './images/StarWhite.png',
    yellow: './images/StarYellow.png'
  }

  return (
    <div className='starRating'>
      <img className='starRatingStar' src={images.yellow}/>
      <img className='starRatingStar' src={images.white}/>
      <img className='starRatingStar' src={images.white}/>
      <img className='starRatingStar' src={images.white}/>
      <img className='starRatingStar' src={images.white}/>
    </div>
  );
}

export default StarRating;
