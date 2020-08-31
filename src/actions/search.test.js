import { searchByCity } from './search';
import { RECEIVE_WEATHER, RECEIVE_FORECAST } from './actionTypes';

let dispatch;
let response;
let mockGetWeather;
let mockGetForecast;
let mockWeatherMapper;
let mockForecastMapper;
let cityName;

jest.mock('services/weatherApi', () => ({
	getWeather: async (cityName) => mockGetWeather(cityName),
	getForecast: async (coordinates) => mockGetForecast(coordinates),
}));

jest.mock('mappers', () => ({
	weatherMapper: () => mockWeatherMapper(),
	forecastMapper: () => mockForecastMapper(),
}));

beforeEach(() => {
	dispatch = jest.fn();
	response = { data: {} };
	mockGetWeather = jest.fn((cityName) => response);
	mockGetForecast = jest.fn((coordinates) => response);
	mockWeatherMapper = jest.fn(() => ({ coordinates: {} }));
	mockForecastMapper = jest.fn();

	cityName = 'Campo Grande, MS, Brazil';
});

it('Should get weather data from API when search by city', async () => {
	await searchByCity(cityName)(dispatch);

	expect(mockGetWeather).toHaveBeenCalledWith(cityName);
});

it('Should get forecast data from API when search by city', async () => {
	const coordinates = {
		lat: 24.00,
		lon: 52.00,
	};
	mockWeatherMapper = jest.fn(() => ({ coordinates }));

	await searchByCity(cityName)(dispatch);

	expect(mockGetForecast).toHaveBeenCalledWith(coordinates);
});

it('Should dispatch action creator "receiveWeather" when search by city', async () => {
	const weather = {
		someData: 123
	};
	const expectedAction = {
		type: RECEIVE_WEATHER,
		weather,
	};
	mockWeatherMapper = jest.fn(() => weather);

	await searchByCity(cityName)(dispatch);

	expect(dispatch).toHaveBeenCalledWith(expectedAction);
});

it('Should dispatch action creator "receiveForecast" when search by city', async () => {
	const forecast = {
		someData: 456
	};
	const expectedAction = {
		type: RECEIVE_FORECAST,
		forecast,
	};
	mockForecastMapper = jest.fn(() => forecast);

	await searchByCity(cityName)(dispatch);

	expect(dispatch).toHaveBeenCalledWith(expectedAction);
});