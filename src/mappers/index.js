const weatherMapper = ({name, weather, main, pod, coord}) => ({
  cityName: name,
  description: weather[0].main,
  temperature: main.temp,
  code: weather.code,
  partOfTheDay: pod,
  coordinates: coord
});

const forecastMapper = forecast => {
  const today = forecast.hourly;
  const nextDays = forecast.daily;

  return {
    today: today.map(todayForecastMapper),
    nextDays: nextDays.map(nextDayForecastMapper),
  };
}

const todayForecastMapper = forecast => ({
  time: forecast.dt,
  description: forecast.weather[0].description,
  icon: forecast.weather[0].icon,
  temperature: forecast.temp,
});

const nextDayForecastMapper = forecast => ({
  temperature: forecast.temp.day,
  maximumTemperature: forecast.temp.max,
  minimumTemperature: forecast.temp.min,
  description: forecast.weather[0].description,
  icon: forecast.weather[0].icon,
  date: forecast.dt
});

export {
  weatherMapper,
  forecastMapper,
};