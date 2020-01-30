import initialState from './initialState';
import { RECEIVE_FORECAST } from '../actions/actionTypes';

const weatherForecast = (state = initialState.forecast, action) => {
  switch (action.type) {
    case RECEIVE_FORECAST:
      return {
        ...action.forecast
      };
    default:
      return state;
  }
};

export default weatherForecast;