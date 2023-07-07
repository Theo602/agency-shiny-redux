import { createSlice } from "@reduxjs/toolkit";


const themeSlice = createSlice({
    name: 'theme',
    initialState: 'light',
    reducers: {
        toggle: (state) => {
            return state === 'light' ? 'dark' : 'light';
        },
        init: (state, action) => {
            return action.payload;
        },
    },

});

const { actions, reducer } = themeSlice;
export const { init, toggle } = actions;
export default reducer;


