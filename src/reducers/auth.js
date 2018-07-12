import {
    SET_AUTH_TOKEN,
    CLEAR_AUTH,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR,
    QUESTION_SUCCESS
} from '../actions/auth';
// import { DISPLAY_ANSWER, SET_DISPLAY_NULL } from '../actions/feedback';

const initialState = {
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null,
    question: null,
    loading: false,
    error: null,
    // currentAnswer: null
};

export default function reducer(state = initialState, action) {
    if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    } else if (action.type === CLEAR_AUTH) {
        return Object.assign({}, state, {
            authToken: null,
            currentUser: null
        });
    } else if (action.type === AUTH_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === AUTH_SUCCESS) {
        return Object.assign({}, state, {
            currentUser: action.currentUser
        });
    } else if (action.type === AUTH_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    } else if (action.type === QUESTION_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            error: null,
            question: action.question
        })
    }
    // else if (action.type === DISPLAY_ANSWER) {
    //     return Object.assign({}, state, {
    //         currentAnswer: action.truthy
    //     })
    // }
    // else if (action.type === SET_DISPLAY_NULL) {
    //     return Object.assign({}, state, {
    //         currentAnswer: null
    //     })
    // }
    return state;
}
