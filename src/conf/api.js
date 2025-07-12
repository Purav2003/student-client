import axios from 'axios';
import { BACKEND_URI } from './env';

const token = typeof window !== 'undefined' && localStorage.getItem('token');
// Create Axios instance
const api = axios.create({
  baseURL: `${BACKEND_URI}`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
});
  
// // Attach token dynamically before each request
// api.interceptors.request.use(
//   (config) => {
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// Redirect on 401 Unauthorized
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && typeof window !== 'undefined') {
      localStorage.removeItem('token'); // Optional: clear token
      window.location.href = '/login'; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

export default api;
