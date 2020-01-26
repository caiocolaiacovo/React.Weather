import { combineReducers } from 'redux';
import weather from './weather';
import weatherForecasts from './weatherForecasts';
import loading from './loading';

const rootReducer = combineReducers({
  weather,
  weatherForecasts,
  loading,
});

export default rootReducer;