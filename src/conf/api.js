import axios from 'axios';
import { BACKEND_URI } from './env';

const token = typeof window !== 'undefined' && localStorage.getItem('token');

const api = axios.create({
    baseURL: `${BACKEND_URI}`,
    headers: {
        'Content-Type': 'application/json',
    },
    Authorization: token && `Bearer ${token}`,
});


export default api;
