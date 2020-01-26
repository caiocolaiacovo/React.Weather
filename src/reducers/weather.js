import initialState from './initialState';
import { RECEIVE_WEATHER } from '../actions/actionTypes';

const weather = (state = initialState.weather, action) => {
  switch (action.type) {
    case RECEIVE_WEATHER:
      return {
        ...action.weather
      };
    default:
      return state;
  }
};

export default weather;