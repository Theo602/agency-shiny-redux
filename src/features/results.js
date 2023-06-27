import { createAction, createReducer } from "@reduxjs/toolkit";
import { selectResults } from "../utils/selectors";


// Le state initial de la feature survey

const initialState = {
    status: 'void',
    data: null,
    error: null,
    params: null,
}


// actions creators

export const resultFetching = createAction(
    'result/fetching',
    (params) => ({
        payload: { params },
    })
);

export const resultResolved = createAction(
    'result/resolved',
    (params, data) => ({
        payload: { params, data },
    })
);

export const resultRejected = createAction(
    'result/rejected',
    (params, error) => ({
        payload: { params, error },
    })
);


// Call Api survey

export function fetchOrUpdateResults(params) {

    return async (dispatch, getState) => {

        const results = selectResults(getState());

        if (results.status === 'void' || results.params !== params) {
            dispatch(resultFetching(params));
        }

        try {

            const response = await fetch(`http://localhost:8000/results?${params}`);
            const data = await response.json();
            dispatch(resultResolved(params, data));

        } catch (error) {

            dispatch(resultRejected(params, error));
        }
    };

}


// Le reducer

export default createReducer(initialState, (builder) =>
    builder
        .addCase(resultFetching, (draft, action) => {

            const params = action.payload.params

            if (draft.status === 'void') {
                draft.status = 'pending';
                draft.params = params;
                return;
            }
            draft.status = 'updating';
            draft.params = params;
        })
        .addCase(resultResolved, (draft, action) => {

            if (draft.params !== action.payload.params) {
                return;
            }

            if (draft.status === 'pending' || draft.status === 'updating') {
                draft.data = action.payload.data;
                draft.status = 'resolved';
                return;
            }
            return;
        })
        .addCase(resultRejected, (draft, action) => {
            if (draft.status === 'pending' || draft.status === 'updating') {
                draft.status = 'rejected';
                draft.error = action.payload.error;
                draft.data = null;
            }
            return;
        })
)