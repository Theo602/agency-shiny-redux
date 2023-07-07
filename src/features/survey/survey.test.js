import * as surveyAction from './survey';
import surveyReducer from './survey';


const initialState = {
    status: 'void',
    data: null,
    error: null,
};

const surveyData = {
    1: 'Votre site doit-il sauvegarder des données entrées par vos utilisateurs ?',
    2: 'Votre application doit-elle impérativement apparaître en premier dans les résultats de recherche ?',
    3: `Avez-vous déjà des maquettes pour l'application que vous voulez créer ?`,
    4: `Le site comporte-t-il une fonction d'authentification ?`,
    5: `Souhaitez-vous avoir plusieurs types de comptes pour votre application (administrateur, visiteur, utilisateur, etc). ?`,
    6: `Avez-vous prévu une version mobile à part entière ?`
}

const surveyError = [];

describe('Survey Action', () => {

    it('should create a fetching action objet', () => {
        expect(surveyAction.fetching()).toEqual({
            type: 'survey/fetching',
        });
    });

    it('should create a resolved action objet', () => {
        expect(surveyAction.resolved(surveyData)).toEqual({
            type: 'survey/resolved',
            payload: surveyData,
        });
    });

    it('should create a rejected action objet', () => {
        expect(surveyAction.rejected(surveyError)).toEqual({
            type: 'survey/rejected',
            payload: surveyError,
        });
    });
});

describe('Survey Reducer', () => {

    it('should return the initial state when state is undefined', () => {
        expect(surveyReducer(undefined, { type: '@INIT' })).toEqual(initialState);
    });

    it('should fetching data', () => {

        expect(
            surveyReducer(
                { status: 'void', data: null, error: null },
                surveyAction.fetching()
            )).toEqual({ status: 'pending', data: null, error: null }
            );

        expect(
            surveyReducer(
                { status: 'resolved', data: surveyData, error: null },
                surveyAction.fetching()
            )).toEqual({ status: 'updating', data: surveyData, error: null }
            );

        expect(
            surveyReducer(
                { status: 'rejected', data: null, error: surveyError },
                surveyAction.fetching()
            )).toEqual({ status: 'pending', data: null, error: null }
            );
    });

    it('should resolved data', () => {

        expect(
            surveyReducer(
                { status: 'pending', data: null, error: null },
                surveyAction.resolved(surveyData)
            )).toEqual({ status: 'resolved', data: surveyData, error: null }
            );

        expect(
            surveyReducer(
                { status: 'updating', data: surveyData, error: null },
                surveyAction.resolved(surveyData)
            )).toEqual({ status: 'resolved', data: surveyData, error: null }
            );
    });

    it('should rejected error', () => {

        expect(
            surveyReducer(
                { status: 'pending', data: null, error: null },
                surveyAction.rejected(surveyError)
            )).toEqual({ status: 'rejected', data: null, error: surveyError }
            );

        expect(
            surveyReducer(
                { status: 'updating', data: surveyData, error: null },
                surveyAction.rejected(surveyError)
            )).toEqual({ status: 'rejected', data: null, error: surveyError }
            );
    });

    it('should ignore rejected on resolved', () => {
        expect(
            surveyReducer(
                { status: 'resolved', data: surveyData, error: null },
                surveyAction.rejected(surveyError)
            )).toEqual({ status: 'resolved', data: surveyData, error: null }
            );
    });

    it('should return state on invalid action', () => {
        expect(surveyReducer(initialState, { type: 'INVALID' })).toEqual(initialState);
    });

});