import axios from '../services/axios';

const getCurrentWeather = async (location) => 
  await axios.get(`current?city=${location}`);

const getForecasts = async (location) => 
  await axios.get(`forecast/daily?city=${location}`);

export default {
  getCurrentWeather,
  getForecasts,
};