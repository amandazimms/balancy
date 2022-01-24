const currentEntryReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_ENTRY':
      return action.payload;
    case 'UNSET_CURRENT_ENTRY':
      return {};
    default:
      return state;
  }
};


export default currentEntryReducer;
