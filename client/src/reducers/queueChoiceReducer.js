const queueChoiceReducer = (state = {queueList: [], queue_view: null}, action) => {
  switch (action.type) {
  case 'GET_QUEUE_CHOICE_LIST':
    return {
      ...state, 
      queueList: action.payload
    };

  case 'SET_IS_ENQUEUED':
    return {
      ...state, 
      queue_view: action.payload
    };
  }

  return state;
};

export default queueChoiceReducer;