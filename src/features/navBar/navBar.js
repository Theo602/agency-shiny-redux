import { createSlice } from "@reduxjs/toolkit";
import { selectWidth } from "../../utils/selectors";


// Le state initial de la feature navBar

const initialState = {
    navState: false,
    width: window.innerWidth,
};


// Fonction qui permet de réinitialiser la barre de navigation
export const resetNavBar = (dispatch, getState) => {

    const changeWidth = () => {

        const windowWidth = window.innerWidth;
        dispatch(actions.navbarWidth(windowWidth));

        const width = selectWidth(getState());

        if (width > 992) {
            dispatch(actions.init(false));
        }
    }

    window.addEventListener('resize', changeWidth);

    return () => {
        window.removeEventListener('resize', changeWidth);
    }

}


const navBarSlice = createSlice({
    name: 'navBar',
    initialState,
    reducers: {
        toggle: (draft) => {
            draft.navState = !draft.navState;
            return;
        },
        init: (draft, action) => {
            draft.navState = action.payload;
            return;
        },
        navbarWidth: (draft, action) => {
            draft.width = action.payload;
            return;
        },
    },

});

const { actions, reducer } = navBarSlice;
export const { init, toggle, navbarWidth } = actions;
export default reducer;
