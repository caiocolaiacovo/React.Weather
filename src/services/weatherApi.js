import { instance } from '../utils/axios';

const getCurrentWeather = async (location) =>
  await instance.get(`weather?q=${location}`);

// I hope that OpenWeather API still works, so you are not gonna need this =(
// Or use this method if you only want to test it.
const getCurrentWeatherOffline = async () => {
  const response = await (await fetch('offlineData/currentWeather.json')).json();

  return new Promise((resolve, _) => {
    resolve(response)
  });
}

const getForecasts = async (lon, lat) =>
  await instance.get(`onecall?lat=${lat}&lon=${lon}&exclude=current,minutely`);

// I hope that OpenWeather API still works, so you are not gonna need this =(
// Or use this method if you only want to test it.
const getForecastsOffline = async () => {
  const response = await (await fetch('offlineData/forecasts.json')).json();

  return new Promise((resolve, _) => {
    resolve(response)
  });
}

export default {
  getCurrentWeather,
  getCurrentWeatherOffline,
  getForecasts,
  getForecastsOffline
};