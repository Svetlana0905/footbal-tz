import { configureStore } from '@reduxjs/toolkit';
import { footbalApi } from './footbalApi';

export const store = configureStore({
    reducer: {
        [footbalApi.reducerPath]: footbalApi.reducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(footbalApi.middleware)
});