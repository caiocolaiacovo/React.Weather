import axios from 'axios';
import { BEGIN_AJAX_REQUEST, END_AJAX_REQUEST } from '../actions/actionTypes';

export const instance = axios.create({
  baseURL: window.__environment.BASE_URL
});

export const configureInterceptors = (axios, dispatch) => {
  axios.interceptors.request.use(
    config => {
      dispatch({type: BEGIN_AJAX_REQUEST});
      config.url = `${config.url}&appid=${window.__environment.API_KEY}&units=metric`;
      return config;
    }, error => {
      dispatch({type: END_AJAX_REQUEST});
      return Promise.reject(error);
    }
  );
  
  axios.interceptors.response.use(
    response => {
      dispatch({type: END_AJAX_REQUEST});
      return response
    }, 
    error => {
      dispatch({type: END_AJAX_REQUEST});
      return Promise.reject(error);
    }
  );
}