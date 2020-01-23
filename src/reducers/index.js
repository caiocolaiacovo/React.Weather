import { combineReducers } from 'redux';
import currentWeather from './currentWeather';
import weatherForecasts from './weatherForecasts';

const rootReducer = combineReducers({
  currentWeather,
  weatherForecasts
});

export default rootReducer;