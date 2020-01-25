import axios from 'axios';
import store from '../store';

const instance = axios.create({
  baseURL: window.__environment.BASE_URL
});

instance.interceptors.request.use(function (config) {
  store.dispatch({type: 'BEGIN_AJAX_REQUEST'});

  config.url = `${config.url}&key=${window.__environment.API_KEY}`;
  return config;
}, function (error) {
  store.dispatch({type: 'END_AJAX_REQUEST'});
  return Promise.reject(error);
});

instance.interceptors.response.use(
  response => {
    store.dispatch({type: 'END_AJAX_REQUEST'});
    return response
  }, 
  error => {
    store.dispatch({type: 'END_AJAX_REQUEST'});
    return Promise.reject(error);
  });

export default instance;