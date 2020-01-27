import initialState from './initialState';
import { RECEIVE_FORECAST } from '../actions/actionTypes';

const weatherForecasts = (state = initialState.forecast, action) => {
  switch (action.type) {
    case RECEIVE_FORECAST:
      return {
        ...action.forecasts
      };
    default:
      return state;
  }
};

export default weatherForecasts;