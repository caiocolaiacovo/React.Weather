import initialState from './initialState';
import { RECEIVE_CURRENT_WEATHER } from '../actions/actionTypes';

const currentWeather = (state = initialState.currentWeather, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_WEATHER:
      return {
        ...action.currentWeather
      };
    default:
      return state;
  }
};

export default currentWeather;