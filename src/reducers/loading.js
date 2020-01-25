import initialState from './initialState';
import { BEGIN_AJAX_REQUEST, END_AJAX_REQUEST } from '../actions/actionTypes';

const loading = (state = initialState.requestCount, action) => {
  switch(action.type) {
    case BEGIN_AJAX_REQUEST:
      return state + 1;
    case END_AJAX_REQUEST:
      return state - 1;
    default:
      return state;
  }
}

export default loading;