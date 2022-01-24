import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "CHECK_AND_ADD_ENTRY" actions
function* getTodaysEntry(action) {
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

function* entrySaga() {
  yield takeLatest('GET_TODAYS_ENTRY', getTodaysEntry);
}

export default entrySaga;
