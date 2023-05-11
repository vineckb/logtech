import axios from 'axios';
import { redirect } from 'react-router';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem('@App:token');
  config.headers['X-API-Key'] = token ? `Bearer ${token}` : '';
  return config;
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if ([401, 403].includes(error.response.status)) {
      localStorage.removeItem('@App:user');
      localStorage.removeItem('@App:token');
      redirect('/signin');
    } else {
      return Promise.reject(error);
    }
  }
);
