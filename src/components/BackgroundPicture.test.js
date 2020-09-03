import React from 'react'
import {render} from '@testing-library/react'
import BackgroundPicture from './BackgroundPicture';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

jest.mock('services/weatherConditionCodes', () => ({
  __esModule: true,
  default: {
		100: 'thunderstorm', 
		200: 'rain', 
		300: 'clear'
	},
}));

let mockHour = parseInt(Math.random() * (23 - 0) + 0);
const mockMoment = () => jest.fn(() => mockHour);
jest.mock('moment', () => () => ({
	hour: mockMoment()
}));

let store;
const mockStore = configureStore([thunk]);
const setupStore = (initialState) => {
  store = mockStore(initialState);
  store.dispatch = jest.fn();
};

it('Should not be visible when image name was not found', () => {
	const invalidCode = 400;
	const initialState = {
		weather: {
			code: invalidCode
		},
	};
	setupStore(initialState);
	
	const { container } = render(<Provider store={store}><BackgroundPicture /></Provider>);
	
	expect(container.querySelector('.background-picture__visible')).toBeNull();
});

it('Should be visible when image name was found', () => {
	const initialState = {
		weather: {
			code: 200
		},
	};
	setupStore(initialState);
	
	const { container } = render(<Provider store={store}><BackgroundPicture /></Provider>);
	
	expect(container.querySelector('.background-picture__visible')).not.toBeNull();
});

it.each([
  [5, 100, 'thunderstorm_night'],
	[6, 200, 'rain_day'],
	[17, 200, 'rain_day'],
	[18, 300, 'clear_night'],
])('Should get correct image name with party of the day based on current hour', (hour, code, imageName) => {
	mockHour = hour;
	const expectedStyle = `backgroundImage: 'url("/photos/${imageName}")'`;
	const initialState = {
		weather: {
			code
		},
	};
	setupStore(initialState);
	
	const { container } = render(<Provider store={store}><BackgroundPicture /></Provider>);
	
	expect(container.firstChild).toHaveStyle(expectedStyle);
});