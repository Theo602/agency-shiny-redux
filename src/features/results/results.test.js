import * as resultsAction from './results';
import resultsReducer from './results';


const initialState = {
    status: 'void',
    data: null,
    error: null,
    params: null,
};

const params = '"a1=true&a2=false&a3=false&a4=false&a5=false&a6=false"';

const resultsData = [
    {
        title: 'backend',
        description: "Le backend consiste en la partie émergée de l'iceberg : ce qui permet de faire tourner une application mais qui n'est pas visible par l'utilisateur"
    },
];

const resultsError = [];

describe('Results Action', () => {
    it('should create a fetching action objet', () => {
        expect(resultsAction.fetching(params)).toEqual({
            type: 'results/fetching',
            payload: { params: params },
        });
    });

    it('should create a resolved action objet', () => {
        expect(resultsAction.resolved(params, resultsData)).toEqual({
            type: 'results/resolved',
            payload: { params: params, data: resultsData },
        });
    });

    it('should create a rejected action objet', () => {
        expect(resultsAction.rejected(params, resultsError)).toEqual({
            type: 'results/rejected',
            payload: { params: params, error: resultsError },
        });
    });
});

describe('Results Reducer', () => {

    it('should return the initial state when state is undefined', () => {
        expect(resultsReducer(undefined, { type: '@INIT' })).toEqual(initialState);
    });

    it('should fetching data', () => {

        expect(
            resultsReducer(
                { status: 'void', data: null, error: null, params: null },
                resultsAction.fetching(params)
            )).toEqual({ status: 'pending', data: null, error: null, params: params }
            );

        expect(
            resultsReducer(
                { status: 'resolved', data: resultsData, error: null, params: params },
                resultsAction.fetching(params)
            )).toEqual({ status: 'updating', data: resultsData, error: null, params: params }
            );
    });

    it('should resolved data', () => {

        expect(
            resultsReducer(
                { status: 'pending', data: null, error: null, params: params },
                resultsAction.resolved(params, resultsData)
            )).toEqual({ status: 'resolved', data: resultsData, error: null, params: params }
            );

        expect(
            resultsReducer(
                { status: 'updating', data: resultsData, error: null, params: params },
                resultsAction.resolved(params, resultsData)
            )).toEqual({ status: 'resolved', data: resultsData, error: null, params: params }
            );
    });

    it('should rejected data', () => {

        expect(
            resultsReducer(
                { status: 'pending', data: null, error: null, params: params },
                resultsAction.rejected(params, resultsError)
            )).toEqual({ status: 'rejected', data: null, error: resultsError, params: params }
            );

        expect(
            resultsReducer(
                { status: 'updating', data: resultsData, error: null, params: params },
                resultsAction.rejected(params, resultsError)
            )).toEqual({ status: 'rejected', data: null, error: resultsError, params: params }
            );
    });

    it('should ignore rejected on resolved', () => {
        expect(
            resultsReducer(
                { status: 'resolved', data: resultsData, error: null },
                resultsAction.rejected(resultsError)
            )).toEqual({ status: 'resolved', data: resultsData, error: null }
            );
    });

    it('should return state on invalid action', () => {
        expect(resultsReducer(initialState, { type: 'INVALID' })).toEqual(initialState);
    });

});