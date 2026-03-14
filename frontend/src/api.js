

import axios from 'axios';

const api = axios.create({
  // Ensure this points to your FastAPI backend
  // baseURL: 'http://127.0.0.1:8000/api/v1', 
  baseURL: 'https://ats2-oj14.onrender.com/api/v1', 
});

// --- DYNAMIC TOKEN ATTACHMENT ---
api.interceptors.request.use(
  (config) => {
    // 1. Grab the token from localStorage right before the request is sent
    const token = localStorage.getItem('user_token');
    
    // 2. If it exists, attach it to the Authorization header
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// --- AUTO-LOGOUT ON 401 ERRORS ---
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // RESTORED: Token is actually invalid or expired now, so clear it
      localStorage.removeItem('user_token');
      window.location.href = '/auth'; 
    }
    return Promise.reject(error);
  }
);

export default api;