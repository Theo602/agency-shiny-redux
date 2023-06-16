import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme"
import freelancesReducer from "../features/freelances";
import surveyReducer from "../features/survey";
import profileReducer from "../features/profile";
import navbarReducer from "../features/navBar";


export default configureStore({
    reducer: {
        theme: themeReducer,
        navBar: navbarReducer,
        freelances: freelancesReducer,
        survey: surveyReducer,
        profile: profileReducer
    }
})