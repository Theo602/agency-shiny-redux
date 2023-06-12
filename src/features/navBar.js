import { produce } from "immer";
import { selectWidth } from "../utils/selectors";

// Le state initial de la feature freelances

const initialState = {
    navState: false,
    width: window.innerWidth,
}


// Les noms des actions

export const NAVBAR_INIT = "navbarInit";
export const NAVBAR_TOOGLE = "toogleNavbar";
export const NAVBAR_WIDTH = "navbarWidth";

// actions creators

export const toogleNavBar = () => ({ type: NAVBAR_TOOGLE })

export const navBarInit = (navbar) => ({
    type: NAVBAR_INIT,
    payload: navbar
})

export const navbarWidth = (width) => ({
    type: NAVBAR_WIDTH,
    payload: width
})

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
// on utilise une valeur par défaut pour donner le state initial
export const navbarReducer = (state = initialState, action) => {

    return produce(state, (draft) => {

        switch (action.type) {

            case NAVBAR_INIT: {
                draft.navState = action.payload;
                return;
            }

            case NAVBAR_TOOGLE: {
                draft.navState = !draft.navState;
                return;
            }

            case NAVBAR_WIDTH: {
                draft.width = action.payload;
                return;
            }

            default:
                return;
        }

    });
}
