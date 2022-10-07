import axios from 'axios';

const brasilApi = axios.create({
  baseURL: 'https://brasilapi.com.br/api/',
});

export { brasilApi };
