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

export async function fetchOrUpdateSurvey(dispatch, getState) {

    const status = selectSurvey(getState()).status;

    if (status === 'pending' || status === 'updating') {
        return;
    }

    dispatch(surveyFetching());

    try {

        const response = await fetch('http://localhost:8000/survey');
        const data = await response.json();
        dispatch(surveyResolved(data));

    } catch (error) {

        dispatch(surveyRejected(error));
    }
}

// Le reducer

export default createReducer(initialState, (builder) =>
    builder
        .addCase(surveyFetching, (draft) => {
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