import { render as rtlRender } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import themeReducer from "../../features/theme/theme"
import freelancesReducer from "../../features/freelances/freelances";
import surveyReducer from "../../features/survey/survey";
import profileReducer from "../../features/profile/profile";
import navbarReducer from "../../features/navBar/navBar";
import resultsReducer from "../../features/results/results";
import answersReducer from "../../features/answers/answers";

export function render(ui, options) {

    const store = configureStore({

        reducer: {
            theme: themeReducer,
            navBar: navbarReducer,
            freelances: freelancesReducer,
            survey: surveyReducer,
            profile: profileReducer,
            results: resultsReducer,
            answers: answersReducer,
        }
    });

    function Wrapper({ children }) {
        return (
            <MemoryRouter {...options}>
                <Provider store={store}>
                    {children}
                </Provider>
            </MemoryRouter>
        );
    }

    rtlRender(ui, { wrapper: Wrapper });
}