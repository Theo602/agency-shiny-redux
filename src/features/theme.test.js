import * as themeAction from './theme';
import themeReducer from './theme';

describe('Theme action', () => {
    it('should create a toogle action objet', () => {
        expect(themeAction.toggle()).toEqual({ type: 'theme/toggle', });
    });

    it('should create a init action objet', () => {
        expect(themeAction.init('light')).toEqual({
            type: 'theme/init',
            payload: 'light',
        });
        expect(themeAction.init('dark')).toEqual({
            type: 'theme/init',
            payload: 'dark',
        });
    });

});

describe('Theme reducer', () => {
    it('should return the initial state when state is undefined', () => {
        expect(themeReducer(undefined, { type: '@INIT' })).toEqual('light');
    });

    it('should toggle theme', () => {
        expect(themeReducer('light', themeAction.toggle())).toEqual('dark');
        expect(themeReducer('dark', themeAction.toggle())).toEqual('light');
    });

    it('should init theme', () => {
        expect(themeReducer('light', themeAction.init('light'))).toEqual('light');
        expect(themeReducer('dark', themeAction.init('light'))).toEqual('light');
    });

    it('should return state on invalid action', () => {
        expect(themeReducer('light', { type: 'INVALID' })).toEqual('light');
    });
})
