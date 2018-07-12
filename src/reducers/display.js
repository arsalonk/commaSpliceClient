import { DISPLAY_ANSWER, SET_DISPLAY_NULL } from '../actions/feedback';

const initialState = {
  currentAnswer: null
};

export default function displayReducer(state = initialState, action) {
  
  if (action.type === DISPLAY_ANSWER) {
      return Object.assign({}, state, {
          currentAnswer: action.truthy
      })
  }
  else if (action.type === SET_DISPLAY_NULL) {
      return Object.assign({}, state, {
          currentAnswer: null
      })
  }
  return state;
}
