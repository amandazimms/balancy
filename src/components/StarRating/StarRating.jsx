import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function StarRating(props) {

  const dispatch = useDispatch();
  const currentEntry = useSelector(store => store.currentEntry);
  const user = useSelector(store => store.user);

  const [rating, setRating] = useState(props.rating);

  const images = {
    white: './images/StarWhite.png',
    yellow: './images/StarYellow.png'
  }

  const [imagePaths, setImagePaths] = useState( [images.yellow, images.white, images.white, images.white, images.white] );
  
  useEffect(() => {
    updateRatingImages(props.rating);
  }, []);
  
  const updateRating = (_rating) => {
    //updates the actual rating, and sends it to DB
    setRating(_rating);
    updateRatingImages(_rating);

    dispatch({ type:'UPDATE_RATING', payload: {rating: _rating, entry_id: currentEntry.id, user_id: user.id} });
  }

  const updateRatingImages = (_rating) => {
    //updates the star images to yellow/white, to match the number of rating
    let newImagePaths = [];
    for (let i=1; i<=_rating; i++){
      newImagePaths.push(images.yellow);
    }

    for (let i=_rating+1; i<=5; i++){
      newImagePaths.push(images.white);
    }
    setImagePaths(newImagePaths);
  }

  return (
    <div className='starRating'>
      <img onClick={ () => updateRating(1) } className='starRatingStar' src={imagePaths[0]}/>
      <img onClick={ () => updateRating(2) } className='starRatingStar' src={imagePaths[1]}/>
      <img onClick={ () => updateRating(3) } className='starRatingStar' src={imagePaths[2]}/>
      <img onClick={ () => updateRating(4) } className='starRatingStar' src={imagePaths[3]}/>
      <img onClick={ () => updateRating(5) } className='starRatingStar' src={imagePaths[4]}/>
    </div>
  );
}

export default StarRating;
