import { useEffect } from 'react';
import { StyleLink } from '../../utils/style/BtnLink';
import { NavResponsive } from './NavBarResponsiveStyle';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { selectNavBar, selectTheme } from '../../utils/selectors';
import { navBarInit, resetNavBar } from '../../features/navBar';

function NavBarResponsive(){

    const theme = useSelector(selectTheme);
    const navBar = useSelector(selectNavBar);
    const checkWidth = useSelector(selectNavBar);

    const store = useStore();
    const dispatch = useDispatch();
     
    useEffect(() => {
        resetNavBar(store);
    }, [store]);

    const outClick = () => {
        dispatch(navBarInit(false));
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