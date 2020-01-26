import axios from 'axios';
import { BEGIN_AJAX_REQUEST, END_AJAX_REQUEST } from '../actions/actionTypes';

export const instance = axios.create({
  baseURL: window.__environment.BASE_URL
});

export const configureInterceptors = (axios, store) => {
  axios.interceptors.request.use(
    config => {
      store.dispatch({type: BEGIN_AJAX_REQUEST});
      config.url = `${config.url}&key=${window.__environment.API_KEY}`;
      return config;
    }, error => {
      store.dispatch({type: END_AJAX_REQUEST});
      return Promise.reject(error);
    }
  );
  
  axios.interceptors.response.use(
    response => {
      store.dispatch({type: END_AJAX_REQUEST});
      return response
    }, 
    error => {
      store.dispatch({type: END_AJAX_REQUEST});
      return Promise.reject(error);
    }
  );
}