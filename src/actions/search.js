import { RECEIVE_WEATHER, RECEIVE_FORECAST } from './actionTypes';
import weatherApi from 'services/weatherApi';
import { weatherMapper, forecastMapper } from 'mappers';

const receiveWeather = weather => ({
  type: RECEIVE_WEATHER,
  weather
});

const receiveForecast = forecast => ({
  type: RECEIVE_FORECAST,
  forecast
});

export const searchByCity = cityName => 
  async dispatch => {
    const weatherResponse = await weatherApi.getWeather(cityName);
    const weather = weatherMapper(weatherResponse.data);

    const forecastResponse = await weatherApi.getForecast(weather.coordinates);
    const forecast = forecastMapper(forecastResponse.data);

    dispatch(receiveWeather(weather));
    dispatch(receiveForecast(forecast));
  };