import { combineReducers } from 'redux';
import currentWeather from './currentWeather';
import weatherForecasts from './weatherForecasts';
import loading from './loading';

const rootReducer = combineReducers({
  currentWeather,
  weatherForecasts,
  loading,
});

export default rootReducer;