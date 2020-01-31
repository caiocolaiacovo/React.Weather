const weatherMapper = ({city_name, weather, temp}) => ({
  cityName: city_name,
  description: weather.description,
  temperature: temp
});

const forecastMapper = (today, nextDays) => ({
  today: today.map(todayForecastMapper),
  nextDays,
});

const todayForecastMapper = (forecast) => ({
  time: forecast.timestamp_local,
  description: forecast.weather.description,
  temperature: forecast.temp,
});

export {
  weatherMapper,
  forecastMapper,
};