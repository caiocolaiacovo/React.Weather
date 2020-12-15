import React from 'react';
import Weather from './Weather'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

let store;
const mockStore = configureStore([thunk]);
const setupStore = (initialState) => {
  store = mockStore(initialState);
  store.dispatch = jest.fn();
};

it('Should show city name', () => {
  const expectedCityName = 'Campo Grande';
  setupStore(
    {
      weather: {
        cityName: expectedCityName,
      }
    }
  );
  render(<Provider store={store}><Weather /></Provider>)

  const cityName = screen.queryByText(expectedCityName);

  expect(cityName).not.toBeNull();
});

it('Should show weather description', () => {
  const expectedDescription = 'Clouds';
  setupStore(
    {
      weather: {
        description: expectedDescription,
      }
    }
  );
  render(<Provider store={store}><Weather /></Provider>)

  const description = screen.queryByText(expectedDescription);

  expect(description).not.toBeNull();
});

it.each([
  [25, "25º"],
  [28.7, "28º"],
  ['24', "24º"],
  ['21,2', "21º"],
  ['23.5', "23º"],
  [' 24 ', "24º"],
])('Should show weather temperature', (serviceTemperature, expectedTemperature) => {
  setupStore(
    {
      weather: {
        temperature: serviceTemperature,
      }
    }
  );
  render(<Provider store={store}><Weather /></Provider>)

  const temperature = screen.queryByText(`${expectedTemperature}`);

  expect(temperature).not.toBeNull();
});