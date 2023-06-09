import { useEffect, useState } from 'react';
import { StyleLink } from '../../utils/style/BtnLink';
import { NavResponsive } from './NavBarResponsiveStyle';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../utils/selectors';

function NavBarResponsive({ navOpen, setNavOpen }){

    const theme = useSelector(selectTheme);
    const [ checkWidth, setCheckWidth] = useState(window.innerWidth)
    
    useEffect(() => {

        const changeWidth = () => {
            setCheckWidth(window.innerWidth);

            if(window.innerWidth > 992) {
                setNavOpen(false);
            }

        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }

    }, [setNavOpen]);

    const outClick = () => {
        setNavOpen(false);
    }

    return(
        <>
           { (checkWidth <= 992) && (
                
                <NavResponsive theme={theme} navOpen={navOpen}>
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