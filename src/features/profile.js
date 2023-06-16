import { createAction, createReducer } from "@reduxjs/toolkit";
import { selectProfile } from "../utils/selectors";


// Le state initial de la feature profile

const initialState = {}


// actions creators

const profileFetching = createAction(
    'profile/fetching',
    (freelanceId) => ({
        payload: { freelanceId },
    })
);

const profileResolved = createAction(
    'profile/resolved',
    (freelanceId, data) => ({
        payload: { freelanceId, data },
    })
);

const profileRejected = createAction(
    'profile/rejected',
    (freelanceId, error) => ({
        payload: { freelanceId, error },
    })
);


// Call Api freelance
// cette fonction est une action asynchrone
// elle attend le store redux en paramètre

export async function fetchOrUpdateProfile(freelanceId, store) {

    const freelanceById = selectProfile(freelanceId);
    const status = freelanceById(store.getState()).status;

    if (status === 'pending' || status === 'updating') {
        return;
    }

    store.dispatch(profileFetching(freelanceId));

    try {

        const response = await fetch(`http://localhost:8000/freelance?id=${freelanceId}`);
        const data = await response.json();
        store.dispatch(profileResolved(freelanceId, data));

    } catch (error) {

        store.dispatch(profileRejected(freelanceId, error));
    }
}

// Fonction si le freelance est undefined

function setVoidIfUndefined(draft, freelanceId) {
    if (draft[freelanceId] === undefined) {
        draft[freelanceId] = { status: 'void' }
    }
}


// Le reducer

export default createReducer(initialState, (builder) =>
    builder
        .addCase(profileFetching, (draft, action) => {

            setVoidIfUndefined(draft, action.payload.freelanceId);

            if (draft[action.payload.freelanceId].status === 'void') {
                draft[action.payload.freelanceId].status = 'pending';
                return;
            }

            if (draft[action.payload.freelanceId].status === 'rejected') {
                draft[action.payload.freelanceId].error = null;
                draft[action.payload.freelanceId].status = 'pending';
                return;
            }

            if (draft[action.payload.freelanceId].status === 'resolved') {
                draft[action.payload.freelanceId].status = 'updating';
                return;
            }
            return;
        })
        .addCase(profileResolved, (draft, action) => {

            setVoidIfUndefined(draft, action.payload.freelanceId);

            if (draft[action.payload.freelanceId].status === 'pending' || draft[action.payload.freelanceId].status === 'updating') {
                draft[action.payload.freelanceId].data = action.payload.data;
                draft[action.payload.freelanceId].status = 'resolved';
                return;
            }
            return;
        })
        .addCase(profileRejected, (draft, action) => {

            setVoidIfUndefined(draft, action.payload.freelanceId);

            if (draft[action.payload.freelanceId].status === 'pending' || draft[action.payload.freelanceId].status === 'updating') {
                draft[action.payload.freelanceId].error = action.payload.error;
                draft[action.payload.freelanceId].data = null;
            }
            return;
        })
)