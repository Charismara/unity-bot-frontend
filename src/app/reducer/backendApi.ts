import {createApi} from '@reduxjs/toolkit/query/react'
import {generatePath} from 'react-router-dom';
import {backendBaseQuery} from "../api/baseQuery";
import {IProfile} from "./backendApiModels";

export const api = createApi({
    reducerPath: 'backend',
    baseQuery: backendBaseQuery(),
    tagTypes: [],
    endpoints: builder => ({
        getProfile: builder.query<IProfile, {}>({
            query: arg => ({url: generatePath('/discord/profile'), method: 'get'}),
        }),
    })
})

export const {
    useGetProfileQuery,
} = api;


export default api
