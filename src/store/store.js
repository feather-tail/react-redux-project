import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import tasksReducer from './tasksSlice';
import loggerMiddleware from './loggerMiddleware';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        tasks: tasksReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
});
