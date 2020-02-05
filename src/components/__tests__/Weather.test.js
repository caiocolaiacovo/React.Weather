import React from 'react';
import { render } from '@testing-library/react';
import Weather from '../Weather';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import '@testing-library/jest-dom/extend-expect'

const reducer = (state = initialState, _) => state;

const initialState = {
  weather: {
    cityName: "Campo Grande"
  }
};

const store = createStore(reducer, initialState);

it('should render component using state from store', () => {
  const { getByText } = render(<Provider store={store}><Weather/></Provider>)
  expect(getByText("Campo Grande")).toBeInTheDocument();
});