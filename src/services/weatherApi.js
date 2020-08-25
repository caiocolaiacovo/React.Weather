import { instance } from '../utils/axios';

const getWeather = async (location) =>
  await instance.get(`weather?q=${location}`);

const getForecast = async (coordinates) =>
  await instance.get(`onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=current,minutely`);

// I hope that OpenWeather API still works, so you are not gonna need this =(
// Or use this method if you only want to test it.
const getWeatherOffline = async () => {
  const response = await (await fetch('offlineData/currentWeather.json')).json();

  return new Promise((resolve, _) => {
    resolve(response)
  });
}

const getForecastOffline = async () => {
  const response = await (await fetch('offlineData/forecasts.json')).json();

  return new Promise((resolve, _) => {
    resolve(response)
  });
}

export default {
  getWeather,
  getForecast,
  getWeatherOffline,
  getForecastOffline
};