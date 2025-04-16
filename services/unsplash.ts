import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const unsplashApi = createApi({
    reducerPath: 'unsplashApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.unsplash.com/',
        prepareHeaders: (headers) => {
            const CLIENT_ID = process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID
            if (CLIENT_ID) {
                headers.set('Authorization', `Client-ID ${CLIENT_ID}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        getrandomImage: builder.query<string, void>({
            query: () => `photos/random?query=beauty+pretty+bikini+photography&orientation=portrait`,
            transformResponse: (response: any)=> response.urls.full
        }),
    }),
})

export const { useGetrandomImageQuery } = unsplashApi