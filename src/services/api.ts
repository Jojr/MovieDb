import axios from 'axios';

const http = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 10000,
});

const Api = {
  get: (path: string) => {
    return http.get(path);
  },
};

export default Api;
