import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

const store = configureStore({
    reducer: rootReducer,
    devTools: {
        maxAge: 100,
        name: 'myStore'
    }
});

export default store;