import { RECEIVE_CURRENT_WEATHER, RECEIVE_WEATHER_FORECASTS } from './actionTypes';
import axios from '../services/axios';

const receiveCurrentWeather = currentWeather => ({
  type: RECEIVE_CURRENT_WEATHER,
  currentWeather
});

const receiveWeatherForecasts = forecasts => ({
  type: RECEIVE_WEATHER_FORECASTS,
  forecasts
});

export const searchByCity = location => 
  async dispatch => {
    let response = await axios.get(`https://api.weatherbit.io/v2.0/current?city=${location}&key=XXX`);
    const currentWeather = response.data.data[0];

    dispatch(receiveCurrentWeather(currentWeather));

    response = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=XXX`);
    const forecasts = response.data;

    dispatch(receiveWeatherForecasts(forecasts));
  };

