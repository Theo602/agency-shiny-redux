import { useDispatch, useSelector } from 'react-redux';
import EmailInput from '../EmailInput/EmailImput';
import { FooterContainer, NightModeButton } from './FooterStyle';
import { selectTheme } from '../../utils/selectors';
import * as themeActions from '../../features/theme/theme';

function Footer(){

    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    return(
        <FooterContainer theme={theme}>
            <EmailInput theme={theme} /> 
            <NightModeButton theme={theme} onClick={() => dispatch(themeActions.toggle())}>
                Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
            </NightModeButton>
        </FooterContainer>
    )
}

export default Footer;