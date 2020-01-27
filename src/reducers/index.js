import { combineReducers } from 'redux';
import weather from './weather';
import forecast from './forecast';
import loading from './loading';

const rootReducer = combineReducers({
  weather,
  forecast,
  loading,
});

export default rootReducer;