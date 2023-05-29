// On utilise des variables pour les noms des actions pour éviter les fautes de frappe

export const THEME_INIT = "themeInit";
export const THEME_TOOGLE = "toogleTheme";

// actions creators

export const toogleTheme = () => ({ type: THEME_TOOGLE })

export const themeInit = (theme = "light") => ({
    type: THEME_INIT,
    payload: theme
})

// Le reducer
// on utilise une valeur par défaut pour donner le state initial
export const themeReducer = (state = 'light', action) => {

    if (action.type === THEME_INIT) {
        return action.payload;
    }

    if (action.type === THEME_TOOGLE) {
        return state === 'light' ? 'dark' : 'light';
    }

    return state;
}


