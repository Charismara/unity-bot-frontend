import axios from 'axios';
import {environment} from '../environment';

export const backendClient = axios.create({
    baseURL: environment.apiEndpoint,
    responseType: 'json',
});