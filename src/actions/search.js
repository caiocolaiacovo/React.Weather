import { RECEIVE_WEATHER, RECEIVE_WEATHER_FORECASTS } from './actionTypes';
import weatherApi from '../services/weatherApi';

const receiveWeather = weather => ({
  type: RECEIVE_WEATHER,
  weather
});

const receiveWeatherForecasts = forecasts => ({
  type: RECEIVE_WEATHER_FORECASTS,
  forecasts
});

export const searchByCity = location => 
  async dispatch => {
    //TODO: Refactor using Promise.all
    const weatherResponse = await weatherApi.getWeather(location);
    const nextDaysForecast = await weatherApi.getForecasts(location);
    const todaysForecastResponse = await weatherApi.getTodaysForecast(location);

    const weather = weatherResponse.data.data[0];
    const forecasts = {
      nextDaysForecast: nextDaysForecast.data.data,
      today: todaysForecastResponse.data.data[0]
    }

    dispatch(receiveWeather(weather));
    dispatch(receiveWeatherForecasts(forecasts));
  };