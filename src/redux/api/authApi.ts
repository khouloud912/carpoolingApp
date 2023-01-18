import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from './types'

export const authApi= createApi({
    reducerPath:'authAPi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://tasty-activity.pockethost.io/api/'}),
    endpoints:(builder)=>({
        getUser: builder.mutation({
            query: (payload)=>({
                url: `collections/user/auth-with-password`,
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  }
            })
        })
    })  
})
