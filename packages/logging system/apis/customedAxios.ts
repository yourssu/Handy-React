import axios from 'axios';

export const customedAxios = axios.create({
  baseURL: import.meta.env.VITE_API_YLS_URL,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
});
