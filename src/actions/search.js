import { RECEIVE_WEATHER, RECEIVE_FORECAST } from './actionTypes';
import weatherApi from '../services/weatherApi';
import { weatherMapper, forecastMapper } from '../mappers';

const receiveWeather = weather => ({
  type: RECEIVE_WEATHER,
  weather
});

const receiveForecast = forecast => ({
  type: RECEIVE_FORECAST,
  forecast
});

export const searchByCity = location => 
  async dispatch => {
    const currentWeatherResponse = await weatherApi.getCurrentWeather(location);
    const { lon, lat } = currentWeatherResponse.data.coord;

    const forecastsResponse = await weatherApi.getForecasts(lon, lat);
    const todaysForecast = forecastsResponse.data.hourly.slice(1, 25);
    const nextDaysForecasts = forecastsResponse.data.daily;

    const weather = weatherMapper(currentWeatherResponse.data);
    const forecast = forecastMapper(todaysForecast, nextDaysForecasts);

    dispatch(receiveWeather(weather));
    dispatch(receiveForecast(forecast));
  };



