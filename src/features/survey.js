import { createAction, createReducer } from "@reduxjs/toolkit";
import { selectSurvey } from "../utils/selectors";

// Le state initial de la feature survey

const initialState = {
    status: 'void',
    data: null,
    error: null,
}


// actions creators

export const surveyFetching = createAction('survey/fetching');
export const surveyResolved = createAction('survey/resolved');
export const surveyRejected = createAction('survey/rejected');


// Call Api survey
// cette fonction est une action asynchrone
// elle attend le store redux en paramètre

export async function fetchOrUpdateSurvey(store) {

    const status = selectSurvey(store.getState()).status;

    if (status === 'pending' || status === 'updating') {
        return;
    }

    store.dispatch(surveyFetching());

    try {

        const response = await fetch('http://localhost:8000/survey');
        const data = await response.json();
        store.dispatch(surveyResolved(data));

    } catch (error) {

        store.dispatch(surveyRejected(error));
    }
}

// Le reducer

export default createReducer(initialState, (builder) =>
    builder
        .addCase(surveyFetching, (draft, action) => {
            if (draft.status === 'void') {
                draft.status = 'pending';
                return;
            }

            if (draft.status === 'rejected') {
                draft.error = null;
                draft.status = 'pending';
                return;
            }

            if (draft.status === 'resolved') {
                draft.status = 'updating';
                return;
            }

            return;
        })
        .addCase(surveyResolved, (draft, action) => {
            if (draft.status === 'pending' || draft.status === 'updating') {
                draft.data = action.payload;
                draft.status = 'resolved';
                return;
            }

            return;
        })
        .addCase(surveyRejected, (draft, action) => {
            if (draft.status === 'pending' || draft.status === 'updating') {
                draft.status = 'rejected';
                draft.error = action.payload;
                draft.data = null;
            }

            return;
        })
)