import axios from 'axios';
const api = axios.create({
  // Ensure this points to your FastAPI backend
  // baseURL: "http://127.0.0.1:8000/api/v1", 
  baseURL: "https://ats-api.xcelgrad.org/api/v1", 
  // baseURL: process.env.REACT_APP_API_URL, 
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('user_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('user_token');
      window.location.href = '/auth'; 
    }
    return Promise.reject(error);
  }
);

export default api;