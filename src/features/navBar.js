import { createAction, createReducer } from "@reduxjs/toolkit";
import { selectWidth } from "../utils/selectors";


// Le state initial de la feature navBar

const initialState = {
    navState: false,
    width: window.innerWidth,
}


// actions creators

export const toogleNavBar = createAction("toogleNavbar");
export const navBarInit = createAction("navbarInit");
export const navbarWidth = createAction("navbarWidth");


// Fonction qui permet de réinitialiser la barre de navigation
export const resetNavBar = (store) => {

    const changeWidth = () => {

        const windowWidth = window.innerWidth;
        store.dispatch(navbarWidth(windowWidth));

        const width = selectWidth(store.getState())

        if (width > 992) {
            store.dispatch(navBarInit(false))
        }
    }

    window.addEventListener('resize', changeWidth);

    return () => {
        window.removeEventListener('resize', changeWidth);
    }

}


// Le reducer

export default createReducer(initialState, (builder) =>
    builder
        .addCase(navBarInit, (draft, action) => {
            draft.navState = action.payload;
            return;
        })
        .addCase(toogleNavBar, (draft) => {
            draft.navState = !draft.navState;
            return;
        })
        .addCase(navbarWidth, (draft, action) => {
            draft.width = action.payload;
            return;
        })
)
