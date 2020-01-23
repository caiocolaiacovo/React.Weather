import axios from 'axios';

const instance = axios.create({
  baseURL: `${window.__environment.BASE_URL}?key=${window.__environment.API_KEY}`
});

export default instance;