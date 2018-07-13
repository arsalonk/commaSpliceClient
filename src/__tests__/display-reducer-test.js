import displayReducer from '../reducers/display';

import { displayAnswer, DISPLAY_ANSWER, setDisplayNull, SET_DISPLAY_NULL } from '../actions/feedback';


describe('displayReducer', () => {

  it('Should switch currentAnswer to true or false when displayAnswer called', () => {
    const state = {
      currentAnswer: null
    };
    const action = displayAnswer(false);
    const newState = displayReducer(state,action);

    expect(newState.currentAnswer).toEqual(false);
  });

  it('Should switch currentAnswer back to null when setDisplayNull called', () => {
    const state = {
      currentAnswer: true
    };
    const action = setDisplayNull();
    const newState = displayReducer(state,action);

    expect(newState.currentAnswer).toEqual(null);
  });
})