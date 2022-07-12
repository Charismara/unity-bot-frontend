import {createApi} from '@reduxjs/toolkit/query/react'
import {generatePath} from 'react-router-dom';
import {backendBaseQuery} from "../api/baseQuery";

export const api = createApi({
    reducerPath: 'backend',
    baseQuery: backendBaseQuery(),
    tagTypes: [],
    endpoints: builder => ({

    })
})

export const {

} = api;


export default api
