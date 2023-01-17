import axios from 'axios';

axios.defaults.withCredentials = true;

export const httpClient = axios.create({
  baseURL: 'http://localhost:4000',
});
