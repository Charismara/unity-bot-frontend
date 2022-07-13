import {configureStore, ThunkAction, Action, combineReducers, AnyAction} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import backendApi from "../reducer/backendApi";
import {accountingSlice} from "../api/accountingSlice";
import {environment} from "../environment";

const reducers = combineReducers({
    backend: backendApi.reducer,
    accounting: accountingSlice.reducer,
});

export type RootState = ReturnType<typeof reducers>;

const rootReducer = (state: RootState, action: AnyAction) => {
    if (action.type === 'accounting/logout') {
        state = {} as RootState;
        if (localStorage.getItem(environment.accessToken)) {
            localStorage.removeItem(environment.accessToken);
        }
    }
    return reducers(state, action);
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat(backendApi.middleware)
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;