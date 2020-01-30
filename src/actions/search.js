import { RECEIVE_WEATHER, RECEIVE_FORECAST } from './actionTypes';
import weatherApi from '../services/weatherApi';

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

    const weather = weatherResponse.data.data[0];
    const { timezone, data } = todaysForecastResponse.data;
    const forecast = {
      today: {
        timezone,
        data,
      },
      nextDays: nextDaysForecastResponse.data.data,
    }

    dispatch(receiveWeather(weather));
    dispatch(receiveForecast(forecast));
  };