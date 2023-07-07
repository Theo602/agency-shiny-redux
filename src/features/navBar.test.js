import * as navBarAction from './navBar';
import navBarReducer from './navBar';


const initialState = {
    navState: false,
    width: window.innerWidth,
};

const windowWidth = window.innerWidth;

describe('navBar action', () => {
    it('should create a toogle action objet', () => {
        expect(navBarAction.toggle()).toEqual({ type: 'navBar/toggle', });
    });

    it('should create a init action objet', () => {
        expect(navBarAction.init(false)).toEqual({
            type: 'navBar/init',
            payload: false,
        });
        expect(navBarAction.init(true)).toEqual({
            type: 'navBar/init',
            payload: true,
        });
    });

    it('should create a width action objet', () => {
        expect(navBarAction.navbarWidth(windowWidth)).toEqual({
            type: 'navBar/navbarWidth',
            payload: windowWidth,
        });
    });

});

describe('navBar Reducer', () => {

    it('should return the initial state when state is undefined', () => {
        expect(navBarReducer(undefined, { type: '@INIT' })).toEqual(initialState);
    });

    it('should toggle navBar', () => {

        expect(
            navBarReducer(
                { navState: false, width: windowWidth },
                navBarAction.toggle()
            )).toEqual({ navState: true, width: windowWidth }
            );

        expect(
            navBarReducer(
                { navState: true, width: windowWidth },
                navBarAction.toggle()
            )).toEqual({ navState: false, width: windowWidth }
            );
    });

    it('should init navBar', () => {

        expect(
            navBarReducer(
                { navState: false, width: windowWidth },
                navBarAction.init(false)
            )).toEqual({ navState: false, width: windowWidth }
            );

        expect(
            navBarReducer(
                { navState: true, width: windowWidth },
                navBarAction.init(false)
            )).toEqual({ navState: false, width: windowWidth }
            );
    });

    it('should width navbar', () => {

        expect(
            navBarReducer(
                { navState: false, width: windowWidth },
                navBarAction.navbarWidth(windowWidth)
            )).toEqual({ navState: false, width: windowWidth }
            );

        expect(
            navBarReducer(
                { navState: true, width: windowWidth },
                navBarAction.navbarWidth(windowWidth)
            )).toEqual({ navState: true, width: windowWidth }
            );

    });

    it('should return state on invalid action', () => {
        expect(navBarReducer(initialState, { type: 'INVALID' })).toEqual(initialState);
    });

});











