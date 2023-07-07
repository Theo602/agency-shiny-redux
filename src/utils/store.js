import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/theme"
import freelancesReducer from "../features/freelances/freelances";
import surveyReducer from "../features/survey/survey";
import profileReducer from "../features/profile/profile";
import navbarReducer from "../features/navBar/navBar";
import resultsReducer from "../features/results/results";
import answersReducer from "../features/answers/answers";

export default configureStore({
    reducer: {
        theme: themeReducer,
        navBar: navbarReducer,
        freelances: freelancesReducer,
        survey: surveyReducer,
        profile: profileReducer,
        results: resultsReducer,
        answers: answersReducer,
    }
})