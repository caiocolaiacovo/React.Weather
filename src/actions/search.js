import { RECEIVE_CURRENT_WEATHER, RECEIVE_WEATHER_FORECASTS } from './actionTypes';
import weatherApi from '../services/weatherApi';

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
    const currentWeatherResponse = await weatherApi.getCurrentWeather(location);
    const forecastsResponse = await weatherApi.getForecasts(location);
    const currentWeather = currentWeatherResponse.data.data[0];
    const forecasts = forecastsResponse.data;

    dispatch(receiveCurrentWeather(currentWeather));
    dispatch(receiveWeatherForecasts(forecasts));
  };