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
    //TODO: Refactor using Promise.all
    const weatherResponse = await weatherApi.getWeather(location);
    const nextDaysForecastResponse = await weatherApi.getNextDaysForecast(location);
    const todaysForecastResponse = await weatherApi.getTodaysForecast(location);

    const weather = weatherMapper(weatherResponse.data.data[0]);
    const forecast = forecastMapper(todaysForecastResponse.data.data, nextDaysForecastResponse.data.data);

    dispatch(receiveWeather(weather));
    dispatch(receiveForecast(forecast));
  };



