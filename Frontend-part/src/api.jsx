// src/api.js (ya jahan bhi file ka naam ho)

import axios from 'axios';

const API = axios.create({
  baseURL: 'https://backend-6-0m2f.onrender.com', 
});

export default API;
