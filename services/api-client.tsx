import axios, { CanceledError } from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '9e147717697646f088ffe0ba93af91ba',
  },
});

export { CanceledError };
