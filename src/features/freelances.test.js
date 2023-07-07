import * as freelancesAction from './freelances';
import freelancesReducer from './freelances';


const initialState = {
    status: 'void',
    data: null,
    error: null,
};

const freelancesData = [
    {
        id: 1,
        name: 'Aragorn',
        job: 'Roi frontend',
        picture: ''

    },
    {
        id: 2,
        name: 'Gandalf',
        job: 'Magicien backend',
        picture: ''
    },
];

const freelancesError = [];

describe('Freelances Action', () => {

    it('should create a fetching action objet', () => {
        expect(freelancesAction.fetching()).toEqual({
            type: 'freelances/fetching',
        });
    });

    it('should create a resolved action objet', () => {
        expect(freelancesAction.resolved(freelancesData)).toEqual({
            type: 'freelances/resolved',
            payload: freelancesData,
        });
    });

    it('should create a rejected action objet', () => {
        expect(freelancesAction.rejected(freelancesError)).toEqual({
            type: 'freelances/rejected',
            payload: freelancesError,
        });
    });
});

describe('Freelances Reducer', () => {

    it('should return the initial state when state is undefined', () => {
        expect(freelancesReducer(undefined, { type: '@INIT' })).toEqual(initialState);
    });

    it('should fetching data', () => {
        expect(
            freelancesReducer(
                { status: 'void', data: null, error: null },
                freelancesAction.fetching()
            )).toEqual({ status: 'pending', data: null, error: null }
            );

        expect(
            freelancesReducer(
                { status: 'resolved', data: freelancesData, error: null },
                freelancesAction.fetching()
            )).toEqual({ status: 'updating', data: freelancesData, error: null }
            );

        expect(
            freelancesReducer(
                { status: 'rejected', data: null, error: freelancesError },
                freelancesAction.fetching()
            )).toEqual({ status: 'pending', data: null, error: null }
            );
    });

    it('should resolved data', () => {
        expect(
            freelancesReducer(
                { status: 'pending', data: null, error: null },
                freelancesAction.resolved(freelancesData)
            )).toEqual({ status: 'resolved', data: freelancesData, error: null }
            );

        expect(
            freelancesReducer(
                { status: 'updating', data: freelancesData, error: null },
                freelancesAction.resolved(freelancesData)
            )).toEqual({ status: 'resolved', data: freelancesData, error: null }
            );
    });

    it('should rejected error', () => {

        expect(
            freelancesReducer(
                { status: 'pending', data: null, error: null },
                freelancesAction.rejected(freelancesError)
            )).toEqual({ status: 'rejected', data: null, error: freelancesError }
            );

        expect(
            freelancesReducer(
                { status: 'updating', data: freelancesData, error: null },
                freelancesAction.rejected(freelancesError)
            )).toEqual({ status: 'rejected', data: null, error: freelancesError }
            );
    });


    it('should ignore rejected on resolved', () => {
        expect(
            freelancesReducer(
                { status: 'resolved', data: freelancesData, error: null },
                freelancesAction.rejected(freelancesError)
            )).toEqual({ status: 'resolved', data: freelancesData, error: null }
            );
    });

    it('should return state on invalid action', () => {
        expect(freelancesReducer(initialState, { type: 'INVALID' })).toEqual(initialState);
    });

});
