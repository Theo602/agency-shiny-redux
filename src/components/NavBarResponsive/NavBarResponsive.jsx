import { useEffect } from 'react';
import { StyleLink } from '../../utils/style/BtnLink';
import { NavResponsive } from './NavBarResponsiveStyle';
import { useDispatch, useSelector} from 'react-redux';
import { selectNavBar, selectTheme } from '../../utils/selectors';
import { resetNavBar } from '../../features/navBar/navBar';
import * as navBarAction from '../../features/navBar/navBar';

function NavBarResponsive(){

    const theme = useSelector(selectTheme);
    const navBar = useSelector(selectNavBar);
    const checkWidth = useSelector(selectNavBar);
 
    const dispatch = useDispatch();
     
    useEffect(() => {
        dispatch(resetNavBar);
    }, [dispatch]);

    const outClick = () => {
        dispatch(navBarAction.init(false));
    }

    return(
        <>
           { (checkWidth <= 992) && (
                
                <NavResponsive theme={theme} navBar={navBar}>
                    <StyleLink $theme={theme} onClick={() => outClick()} to="/">Accueil</StyleLink>
                    <StyleLink $theme={theme} onClick={() => outClick()} to="/freelances">Profils</StyleLink>
                    <StyleLink $theme={theme} onClick={() => outClick()} to="/survey/1" >Faire le test</StyleLink>
                </NavResponsive>
           )

           }

        </>

    )
}

export default NavBarResponsive;