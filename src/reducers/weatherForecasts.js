import initialState from './initialState';
import { RECEIVE_WEATHER_FORECASTS } from '../actions/actionTypes';

const weatherForecasts = (state = initialState.forecasts, action) => {
  switch (action.type) {
    case RECEIVE_WEATHER_FORECASTS:
      return {
        ...action.forecasts
      };
    default:
      return state;
  }
};

export default weatherForecasts;