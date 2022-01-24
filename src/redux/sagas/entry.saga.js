import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "FETCH_TODAYS_ENTRY" actions
function* fetchTodaysEntry(action) {
  //checks DB to see if an entry for today already exists. 
  //if so, GET it
  //if not, POST one (empty)
  const ap = action.payload;

  try {
    const todaysEntry = yield axios.get('/api/entry/today', { params: {user_id: ap.user_id} } );

    yield put({ type: 'SET_CURRENT_ENTRY', payload: todaysEntry.data });    

  } catch (error) {
    console.log('Error with check and add entry:', error);

  }
}

function* updateRating(action){
  //ap.rating is the new rating
  //ap.entry_id 
  //ap.user_id
  const ap = action.payload;

  try {
    yield axios.put(`/api/entry/today-rating/${ap.entry_id}`, {rating: ap.rating} );

    yield put ({ type: 'FETCH_TODAYS_ENTRY', payload: {user_id: ap.user_id} })

  } catch (error) {
    console.log('Error with update rating:', error);

  }
}

function* entrySaga() {
  yield takeLatest('FETCH_TODAYS_ENTRY', fetchTodaysEntry);
  yield takeLatest('UPDATE_RATING', updateRating);
}

export default entrySaga;
