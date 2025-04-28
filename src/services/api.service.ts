import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.aiqfome.com/api/'
});

export default api;