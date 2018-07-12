export const DISPLAY_ANSWER = 'DISPLAY_ANSWER';
export const displayAnswer = (truthy) => ({
    type: DISPLAY_ANSWER,
    truthy
});

export const SET_DISPLAY_NULL = 'SET_DISPLAY_NULL';
export const setDisplayNull = () => ({
    type: SET_DISPLAY_NULL
});