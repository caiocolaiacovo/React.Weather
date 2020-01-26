import { instance } from '../utils/axios';

const getWeather = async (location) => 
  await instance.get(`current?city=${location}`);

const getForecasts = async (location) => 
  await instance.get(`forecast/daily?city=${location}`);

const getTodaysForecast = async (location) => 
  await instance.get(`forecast/hourly?city=${location}&hours=24`);

export default {
  getWeather,
  getForecasts,
  getTodaysForecast
};