import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const TIMEOUT = 5000;

export const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
});
