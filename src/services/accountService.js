import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080/api/v1/account';

export const join = args => {
    return axios.post('/join', args).catch(e => null);
}

export const login = args => {
    return axios.post('/login', args).catch(e => null);
}

export const check = () => {
    return axios.get('/check').catch(e => null);
}