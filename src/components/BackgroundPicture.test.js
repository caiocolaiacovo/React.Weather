import React from 'react'
import {render, screen} from '@testing-library/react'
import BackgroundPicture from './BackgroundPicture';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

let store;
const mockStore = configureStore([thunk]);

beforeEach(() => {
  
});

it('Should not be visible when image name was not found', () => {
	const initialState = {
		weather: {
			code: "anInvalidCode"
		},
	};
  store = mockStore(initialState);
  store.dispatch = jest.fn();
	const { container } = render(<Provider store={store}><BackgroundPicture /></Provider>);
	
	expect(container.querySelector('.background-picture__visible')).toBeNull();
});

it('Should be visible when image name was found', () => {
	const initialState = {
		weather: {
			code: "200"
		},
	};
  store = mockStore(initialState);
  store.dispatch = jest.fn();
	const { container } = render(<Provider store={store}><BackgroundPicture /></Provider>);
	
	expect(container.querySelector('.background-picture__visible')).not.toBeNull();
});