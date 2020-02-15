const weatherMapper = ({city_name, weather, temp}) => ({
  cityName: city_name,
  description: weather.description,
  temperature: temp
});

const forecastMapper = (today, nextDays) => ({
  today: today.map(todayForecastMapper),
  nextDays: nextDays.map(nextDayForecastMapper),
});

const todayForecastMapper = (forecast) => ({
  time: forecast.timestamp_local,
  description: forecast.weather.description,
  icon: forecast.weather.icon,
  temperature: forecast.temp,
});

const nextDayForecastMapper = (forecast) => ({
  temperature: forecast.temp,
  maximumTemperature: forecast.max_temp,
  minimumTemperature: forecast.min_temp,
  description: forecast.weather.description,
  date: forecast.valid_date
});

export {
  weatherMapper,
  forecastMapper,
};