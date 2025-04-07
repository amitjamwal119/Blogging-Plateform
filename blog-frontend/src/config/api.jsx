import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5007/api/posts', // Adjust port if needed
});

export default API;
