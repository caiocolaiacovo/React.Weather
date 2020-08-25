import React from 'react'
import {render, fireEvent, screen, wait } from '@testing-library/react'
import Search from './Search';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

const mockDispatch = jest.fn(() => console.log('dentro do dispatch'));
jest.mock('actions/search', () => {
  return {
    searchByCity: jest.fn().mockImplementation(() => {
      return mockDispatch;
    }),
  }
});

const mockStore = configureStore([thunk]);

it('teste', async () => {
  const initialState = {};
  const store = mockStore(initialState)
  store.dispatch = jest.fn().mockImplementation(() => console.log('dispatch'));
  const wrapper = <Provider store={store}><Search /></Provider>
  render(wrapper);
  const button = screen.getByText('Search');
  const input = screen.getByPlaceholderText('Enter your city');
  fireEvent.change(input, { target: { value: 'Campo Grande, MS, Brazil' } })
  
  await wait(() => {
    fireEvent.click(button);
  });

  console.log(store.dispatch.mock.calls);
  console.log(mockDispatch.mock.calls);

  // // console.log(screen.getByText('Search'));
  // console.log(store.getActions());
});