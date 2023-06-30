// Le state initial de la feature answers

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    //answer: {}
};


const { actions, reducer } = createSlice({
    name: 'answers',
    initialState,
    reducers: {
        setAnswer: (draft, action) => {
            draft[action.payload.questionNumber] = action.payload.answer
        }

        // setAnswer: {
        //     prepare: (answer) => ({
        //         payload: { answer },
        //     }),
        //     reducer: (draft, action) => {
        //         const newAnswer = action.payload.answer;
        //         draft.answer = { ...draft.answer, ...newAnswer }
        //     }
        // }
    },

});

export const { setAnswer } = actions;
export default reducer;