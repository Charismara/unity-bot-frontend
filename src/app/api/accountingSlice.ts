import {createSlice} from "@reduxjs/toolkit";

export const accountingSlice = createSlice({
    name: "accounting",
    initialState: {},
    reducers: {
        logout: (state) => {
        }
    }
});

export const {logout} = accountingSlice.actions;