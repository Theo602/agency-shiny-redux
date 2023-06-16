import { createAction, createReducer } from "@reduxjs/toolkit";


// actions creators

export const themeInit = createAction("themeInit")
export const toogleTheme = createAction("toogleTheme")


// Le reducer

export default createReducer('light', (builder) =>
    builder
        .addCase(toogleTheme, (state) => {
            return state === 'light' ? 'dark' : 'light';
        })
        .addCase(themeInit, (state, action) => {
            return action.payload;
        })
)


