import { DISPLAY_ANSWER, displayAnswer, SET_DISPLAY_NULL, setDisplayNull } from '../actions/feedback';


describe('displayAnswer', () => {

  it('Should return the action', () => {
    const truthy = true;
    const action = displayAnswer(truthy);
    expect(action.type).toEqual(DISPLAY_ANSWER)
    expect(action.truthy).toEqual(truthy);
  });
})

describe('setDisplayNull', () => {

  it('Should return the action', () => {
    const action = setDisplayNull();
    expect(action).toEqual({
      type: SET_DISPLAY_NULL
    })
  });
})

