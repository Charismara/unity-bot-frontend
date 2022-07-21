import {createApi} from '@reduxjs/toolkit/query/react'
import {generatePath} from 'react-router-dom';
import {backendBaseQuery} from "../api/baseQuery";
import {IDiscordBot, IDiscordGuild, IProfile, IRole} from "./backendApiModels";

export const api = createApi({
    reducerPath: 'backend',
    baseQuery: backendBaseQuery(),
    tagTypes: ["IDiscordBot", "IDiscordBotAdmin"],
    endpoints: builder => ({
        getProfile: builder.query<IProfile, void>({
            query: arg => ({url: generatePath('/discord/profile'), method: 'get'}),
        }),

        getRoles: builder.query<IRole[], void>({
            query: arg => ({url: generatePath('/management/permissions/roles'), method: 'get'}),
        }),
        getUsers: builder.query<IProfile[], void>({
            query: arg => ({url: generatePath('/management/users'), method: 'get'}),
        }),


        getDiscordBots: builder.query<IDiscordBot[], void>({
            query: arg => ({url: generatePath('/discord/bots'), method: 'get'}),
            providesTags: ["IDiscordBot"]
        }),
        getDiscordBot: builder.query<IDiscordBot, { id: number }>({
            query: arg => ({url: generatePath('/discord/bot/:id', {id: arg.id.toString()}), method: 'get'}),
            providesTags: ["IDiscordBot"]
        }),
        createDiscordBot: builder.mutation<IDiscordBot, { data: { token: string, name: string } }>({
            query: arg => ({url: generatePath('/discord/bot/create'), method: 'post', data: arg.data}),
            invalidatesTags: ["IDiscordBotAdmin", "IDiscordBot"]
        }),
        deleteDiscordBot: builder.mutation<void, { data: IDiscordBot }>({
            query: arg => ({
                url: generatePath('/discord/bot/:id/delete', {id: arg.data.id.toString()}),
                method: 'delete'
            }),
            invalidatesTags: ["IDiscordBotAdmin", "IDiscordBot"]
        }),
        startDiscordBot: builder.mutation<void, { data: IDiscordBot }>({
            query: arg => ({
                url: generatePath('/discord/bot/:id/start', {id: arg.data.id.toString()}),
                method: 'patch'
            }),
            invalidatesTags: ["IDiscordBotAdmin", "IDiscordBot"]
        }),
        stopDiscordBot: builder.mutation<void, { data: IDiscordBot }>({
            query: arg => ({
                url: generatePath('/discord/bot/:id/stop', {id: arg.data.id.toString()}),
                method: 'patch'
            }),
            invalidatesTags: ["IDiscordBotAdmin", "IDiscordBot"]
        }),


        getDiscordBotsAdmin: builder.query<IDiscordBot[], void>({
            query: arg => ({url: generatePath('/discord/admin/bots'), method: 'get'}),
            providesTags: ["IDiscordBotAdmin", "IDiscordBot"]
        }),
        getDiscordBotAdmin: builder.query<IDiscordBot, { id: number }>({
            query: arg => ({url: generatePath('/discord/admin/bot/:id', {id: arg.id.toString()}), method: 'get'}),
            providesTags: ["IDiscordBotAdmin", "IDiscordBot"]
        }),
        deleteDiscordBotAdmin: builder.mutation<void, { data: IDiscordBot }>({
            query: arg => ({
                url: generatePath('/discord/admin/bot/delete/:id', {id: arg.data.id.toString()}),
                method: 'delete'
            }),
            invalidatesTags: ["IDiscordBotAdmin", "IDiscordBot"]
        }),

        getUserGuilds: builder.query<IDiscordGuild[], void>({
            query: arg => ({url: generatePath('/discord/user/guilds'), method: 'get'})
        }),
    })
})

export const {
    useGetProfileQuery,
    useGetRolesQuery,
    useGetUsersQuery,

    useCreateDiscordBotMutation,
    useDeleteDiscordBotMutation,
    useGetDiscordBotQuery,
    useGetDiscordBotsQuery,
    useStartDiscordBotMutation,
    useStopDiscordBotMutation,

    useDeleteDiscordBotAdminMutation,
    useGetDiscordBotAdminQuery,
    useGetDiscordBotsAdminQuery,

    useGetUserGuildsQuery,
} = api;


export default api
