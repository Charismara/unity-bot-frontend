import axios from 'axios';
import {environment} from '../environment';

export const backendClient = axios.create({
    baseURL: environment.apiEndpoint,
    responseType: 'json',
    headers: {
        Authorization: localStorage.getItem(environment.accessToken) !== undefined ? "Bearer" + localStorage.getItem(environment.accessToken) : "",
    },
});
