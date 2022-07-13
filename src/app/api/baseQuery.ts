import {AxiosError, AxiosRequestConfig} from 'axios';
import {BaseQueryFn} from '@reduxjs/toolkit/query/react';
import {backendClient} from "./clients";
import {environment} from "../environment";

const axiosBaseQuery = (
    {baseUrl}: { baseUrl: string } = {baseUrl: ''}
): BaseQueryFn<{
    url: string
    method: AxiosRequestConfig['method']
    data?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params'],
},
    unknown,
    unknown> =>
    async ({url, method, data, params}) => {
        try {
            return await backendClient({
                url: baseUrl + url,
                method,
                data,
                params,
                headers: localStorage.getItem(environment.accessToken) ? {Authorization: "Bearer " + localStorage.getItem(environment.accessToken)} : {}
            });
        } catch (axiosError) {
            let err = axiosError as AxiosError

            let error = {
                status: err.response?.status,
                data: err.response?.data || err.message,
            }

            console.log("BACKEND_API ERROR", error);

            return {
                error: error,
            }
        }
    };

export const backendBaseQuery = axiosBaseQuery;