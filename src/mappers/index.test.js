import { weatherMapper, forecastMapper } from './index';

describe('Weather mapper', () => {
  it('Should map weather', () => {
    const weatherDto = {
      name: 'Campo Grande, MS, Brazil', 
      weather: [
        {
          main: 'What a sunny day!'
        }
      ], 
      main: {
        temp: 30
      },
      coord: {
        lat: -20.46,
        lon: -54.62
      },
    };
    const expectedWeather = {
      cityName: weatherDto.name,
      description: weatherDto.weather[0].main,
      temperature: weatherDto.main.temp,
      code: weatherDto.weather.code,
      coordinates: weatherDto.coord
    }

    const weather = weatherMapper(weatherDto);

    expect(weather).toMatchObject(expectedWeather);
  });
});

describe('Forecast mappers', () => {
  it("Should map today's forecast", () => {
    const forecastDto = {
      hourly: [
        {
          dt: 123456,
          weather: [
            {
              description: 'What a sunny day!',
              icon: 'd100.png',
            },
          ],
          temp: 30,
        }
      ],
      daily: []
    };
    const expectedForecast = {
      today: [
        {
          time: forecastDto.hourly[0].dt,
          description:forecastDto.hourly[0].weather[0].description,
          icon:forecastDto.hourly[0].weather[0].icon,
          temperature:forecastDto.hourly[0].temp,
        },
      ],
      nextDays: []
    };

    const forecast = forecastMapper(forecastDto)

    expect(forecast).toMatchObject(expectedForecast);
  });

  it("Should map next days forecast", () => {
    const forecastDto = {
      hourly: [],
      daily: [
        {
          temp: {
            day: 25,
            max: 31,
            min: 19,
          },
          weather: [
            {
              description: 'What a sunny day!',
              icon: 'd100.png',
            },
          ],
          dt: 123456,
        }
      ],
    };
    const expectedForecast = {
      nextDays: [
        {
          temperature: forecastDto.daily[0].temp.day,
          maximumTemperature: forecastDto.daily[0].temp.max,
          minimumTemperature: forecastDto.daily[0].temp.min,
          description: forecastDto.daily[0].weather[0].description,
          icon: forecastDto.daily[0].weather[0].icon,
          date: forecastDto.daily[0].dt,
        },
      ],
      today: []
    };

    const forecast = forecastMapper(forecastDto)

    expect(forecast).toMatchObject(expectedForecast);
  });
});