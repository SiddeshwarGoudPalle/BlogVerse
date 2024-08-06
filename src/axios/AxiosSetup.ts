import axios from 'axios';

const custom_axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json"
  },
  timeout: 5000
});

custom_axios.interceptors.request.use(config => {
  if (typeof window !== 'undefined') { // Check if we are in the browser
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  }
  console.log('Request Config:', config); // Debugging line
  return config;
}, error => {
  console.error('Request Error:', error); // Debugging line
  return Promise.reject(error);
});

export default custom_axios;
