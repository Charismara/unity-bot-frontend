import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import backendApi from "../reducer/backendApi";

const reducers = {
    backend: backendApi.reducer
};

export const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat(backendApi.middleware)
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
