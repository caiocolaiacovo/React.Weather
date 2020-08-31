import React from 'react'
import {render, fireEvent, screen, wait } from '@testing-library/react'
import Search from './Search';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

let store;
const mockStore = configureStore([thunk]);
const mockActionResult = jest.fn();
const mockActionSearchByCity = jest.fn(() => mockActionResult);
jest.mock('actions/search', () => ({
    searchByCity: (city) => mockActionSearchByCity(city),
  })
);

beforeEach(() => {
  const initialState = {};
  store = mockStore(initialState);
  store.dispatch = jest.fn();
});

it('Should dispatch action to search city when search button is clicked', async () => {
  render(<Provider store={store}><Search /></Provider>);
  const button = screen.getByText('Search');
  const input = screen.getByPlaceholderText('Enter your city');
  const cityName = 'Campo Grande, MS, Brazil';
  fireEvent.change(input, { target: { value: cityName } });

  await wait(() => {
    fireEvent.click(button);
  });

  expect(mockActionSearchByCity).toHaveBeenCalledWith(cityName);
  expect(store.dispatch).toHaveBeenCalledWith(mockActionResult);
});