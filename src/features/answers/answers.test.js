import * as answerAction from './answers';
import answerReducer from './answers';


const initialState = {};


describe('Answers Action', () => {

    it('should create a answers action objet', () => {
        expect(answerAction.setAnswer({ questionNumber: "2", answer: false })).toEqual({
            type: 'answers/setAnswer',
            payload: { questionNumber: "2", answer: false }
        });
    });

});

describe('Answers Reducer', () => {

    it('should return the initial state when state is undefined', () => {
        expect(answerReducer(undefined, { type: '@INIT' })).toEqual(initialState);
    });

    it('should setAnswer', () => {

        expect(
            answerReducer(
                {},
                answerAction.setAnswer({ questionNumber: "2", answer: false })
            )).toEqual({ 2: false }
            );

        expect(
            answerReducer(
                { 1: true },
                answerAction.setAnswer({ questionNumber: "2", answer: false })
            )).toEqual({ 1: true, 2: false }
            );
    });

    it('should return state on invalid action', () => {
        expect(answerReducer(initialState, { type: 'INVALID' })).toEqual(initialState);
    });

});