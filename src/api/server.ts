import axios from 'axios';

//const BASE_URL = `http://localhost:5000`;
const BASE_URL = `https://flask-backend-buy-rent.herokuapp.com`;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('accessToken');

  if(token && token.length > 0) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const server_calls = {

  userAuth: async (data) => {
    const response = await axios.post(`${BASE_URL}/auth`, data);
    if(response && response.data.success) {
      localStorage.setItem('accessToken', response.data.token);
      localStorage.setItem('authType', data.authType);
    } else {
      alert('Error Logging In!');
    }
  },

  mortgageCalc: async (data) => {
    const response = await axios.post(`${BASE_URL}/`, data);
    if(response && response.data) {
      return response.data;
    } else {
      alert('Error Calculating Mortgage');
    }


  },
  get: async () => {

  }
}
