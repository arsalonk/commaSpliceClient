import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const fetchQuestions = () => {
    return fetch(`${API_BASE_URL}/api/questions`)
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
          const {reason, message, location} = err;
          err.json(err.message)
        });
};
