import * as profileAction from './profile';
import profileReducer from './profile';


const initialState = {};

const freelanceId = '2';

const profileData = [
    {
        id: 1,
        name: 'Aragorn',
        job: 'Roi frontend',
        location: '',
        skills: '',
        available: false,
        picture: ''

    },
];

const profileError = [];

describe('Freelances Action', () => {

    it('should create a fetching action objet', () => {
        expect(profileAction.fetching(freelanceId)).toEqual({
            type: 'profile/fetching',
            payload: { freelanceId: freelanceId },
        });
    });

    it('should create a resolved action objet', () => {
        expect(profileAction.resolved(freelanceId, profileData)).toEqual({
            type: 'profile/resolved',
            payload: { freelanceId: freelanceId, data: profileData },
        });
    });

    it('should create a rejected action objet', () => {
        expect(profileAction.rejected(freelanceId, profileError)).toEqual({
            type: 'profile/rejected',
            payload: { freelanceId: freelanceId, error: profileError },
        });
    });
});


describe('should Profile Reducer', () => {

    it('should return the initial state when state is undefined', () => {
        expect(profileReducer(undefined, { type: '@INIT' })).toEqual(initialState);
    });

    it('should fetching data', () => {

        expect(
            profileReducer(
                {},
                profileAction.fetching(freelanceId)
            )).toEqual({ 2: { status: "pending" } }
            );

        expect(
            profileReducer(
                { 2: { status: "void" } },
                profileAction.fetching(freelanceId)
            )).toEqual({ 2: { status: "pending" } }
            );

        expect(
            profileReducer(
                { 2: { status: "resolved", data: profileData } },
                profileAction.fetching(freelanceId)
            )).toEqual({ 2: { status: "updating", data: profileData } }
            );

        expect(
            profileReducer(
                { 2: { status: "rejected", error: profileError } },
                profileAction.fetching(freelanceId)
            )).toEqual({ 2: { status: "pending", error: null } }
            );
    });

    it('should resolved data', () => {

        expect(
            profileReducer(
                { 2: { status: "pending" } },
                profileAction.resolved(freelanceId, profileData)
            )).toEqual({ 2: { status: "resolved", data: profileData } }
            );

        expect(
            profileReducer(
                { 2: { status: "updating", data: profileData } },
                profileAction.resolved(freelanceId, profileData)
            )).toEqual({ 2: { status: "resolved", data: profileData } }
            );
    });

    it('should rejected data', () => {

        expect(
            profileReducer(
                { 2: { status: "pending" } },
                profileAction.rejected(freelanceId, profileError)
            )).toEqual({ 2: { status: "rejected", data: null, error: profileError } }
            );

        expect(
            profileReducer(
                { 2: { status: "updating", data: profileData } },
                profileAction.rejected(freelanceId, profileError)
            )).toEqual({ 2: { status: "rejected", data: null, error: profileError } }
            );
    });

    it('should return state on invalid action', () => {
        expect(profileReducer(initialState, { type: 'INVALID' })).toEqual(initialState);
    });

});