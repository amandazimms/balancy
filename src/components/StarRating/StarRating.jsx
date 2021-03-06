import React, { useState } from 'react';

function StarRating() {

  const [rating, setRating] = useState(1);

  const images = {
    white: './images/StarWhite.png',
    yellow: './images/StarYellow.png'
  }

  const [paths, setPaths] = useState( [images.yellow, images.white, images.white, images.white, images.white] );

  const updateRating = (_rating) => {
    console.log('updating rating to:', _rating);

    let newPaths = [];
    for (let i=1; i<=_rating; i++){
      newPaths.push(images.yellow);
    }

    for (let i=_rating+1; i<=5; i++){
      newPaths.push(images.white);
    }
    setPaths(newPaths);
    setRating(_rating);
  }

  return (
    <div className='starRating'>
      <img onClick={ () => updateRating(1) } className='starRatingStar' src={paths[0]}/>
      <img onClick={ () => updateRating(2) } className='starRatingStar' src={paths[1]}/>
      <img onClick={ () => updateRating(3) } className='starRatingStar' src={paths[2]}/>
      <img onClick={ () => updateRating(4) } className='starRatingStar' src={paths[3]}/>
      <img onClick={ () => updateRating(5) } className='starRatingStar' src={paths[4]}/>
    </div>
  );
}

export default StarRating;
