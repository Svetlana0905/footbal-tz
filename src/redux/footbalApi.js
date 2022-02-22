import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api.football-data.org/v2',
    prepareHeaders: (headers) => {
        const token = API_KEY
        if (token) {
            headers.set('X-Auth-Token', `${token}`)
        }
        return headers
    },
})
export const footbalApi = createApi({
    reducerPath: 'footbalApi',
    baseQuery,
    endpoints: (build) => ({
        getLeagues: build.query({
            query: () => `competitions`
        }),
        getTeams: build.query({
            query: () => `teams`
        }),
        getLeaguesCalendar: build.query({
            query: (arg) => {
                const { id, dateFrom, dateTo } = arg;
                return {
                    url: `competitions/${id}/matches`,
                    params: { dateFrom, dateTo },
                };
            }
        }),
        getTeamCalendar: build.query({
            query: (arg) => {
                const { id, dateFrom, dateTo } = arg;
                return {
                    url: `teams/${id}/matches`,
                    params: { dateFrom, dateTo },
                };
            }
        }),
    })
});

export const { useGetLeaguesQuery, useGetLeaguesCalendarQuery, useGetTeamsQuery, useGetTeamCalendarQuery } = footbalApi;