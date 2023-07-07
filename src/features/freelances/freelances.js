import { createSlice } from "@reduxjs/toolkit";
import { selectFreelances } from "../../utils/selectors";


// Le state initial de la feature freelances

const initialState = {
    status: 'void',
    data: null,
    error: null,
};


// Call Api freelances

export async function fetchOrUpdateFreelances(dispatch, getState) {

    const status = selectFreelances(getState()).status;

    if (status === 'pending' || status === 'updating') {
        return;
    }
    dispatch(actions.fetching());

    try {
        const response = await fetch('http://localhost:8000/freelances');
        const data = await response.json();
        dispatch(actions.resolved(data));
    } catch (error) {
        dispatch(actions.rejected(error));
    }
}


const { actions, reducer } = createSlice({
    name: 'freelances',
    initialState,
    reducers: {
        fetching: (draft) => {

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
        },
        resolved: (draft, action) => {

            if (draft.status === 'pending' || draft.status === 'updating') {
                draft.data = action.payload;
                draft.status = 'resolved';
                return;
            }
            return;
        },
        rejected: (draft, action) => {

            if (draft.status === 'pending' || draft.status === 'updating') {
                draft.error = action.payload;
                draft.data = null;
                draft.status = 'rejected';
            }
            return;
        },
    },
});

export const { fetching, resolved, rejected } = actions;
export default reducer;