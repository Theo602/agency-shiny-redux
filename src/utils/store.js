import { combineReducers, createStore } from "redux";
import { themeReducer } from "../features/theme"

// Pour connecter les Redux Devtools on utilise une fonction disponible sur l'objet window
// Si cette fonction existe on l'exécute.
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// on utilise combineReducer pour faire fonctionner plusieurs reducers ensemble
const reducer = combineReducers({
    theme: themeReducer,
})

// on utilise le reducer créer avec combineReducers
// pour initialiser le store
// Pas besoin de passer de state initial
// car chaque reducer à son propre state initial
export const store = createStore(reducer, reduxDevtools);
