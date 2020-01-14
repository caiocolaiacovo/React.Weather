import { SEARCH_CITY } from './actionTypes';

const searchCity = city => {
  return {
    type: SEARCH_CITY,
    city,
  };
};