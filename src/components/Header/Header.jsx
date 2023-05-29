import { Link } from 'react-router-dom';
import darkLogo from '../../assets/img/dark-logo.png'
import lightLogo from '../../assets/img/light-logo.png'
import { StyleLink } from '../../utils/style/BtnLink'
import { HeaderContainer, FigureLogo, ImgLogo, Nav } from './HeaderStyle'
import { useState } from 'react';
import Burger from '../Burger/Burger';
import NavBarResponsive from '../NavBarResponsive/NavBarResponsive';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../utils/selectors';


function Header(){

    const theme = useSelector(selectTheme);
    const [navOpen, setNavOpen] = useState(false);

    return(

        <HeaderContainer>

            <FigureLogo>
                <Link to="/"><ImgLogo src={ theme === 'dark' ? lightLogo : darkLogo} alt="Logo Agency shiny" /></Link>   
            </FigureLogo>
            
            <Nav>
                <StyleLink $theme={theme} to="/">Accueil</StyleLink>
                <StyleLink $theme={theme} to="/freelances">Profils</StyleLink>
                <StyleLink  to="/survey/1" $isFullLink={theme}>Faire le test</StyleLink>
            </Nav>

            <Burger navOpen={navOpen} setNavOpen={setNavOpen}/> 
            <NavBarResponsive navOpen={navOpen} setNavOpen={setNavOpen}/> 

        </HeaderContainer>
    )
}

export default Header;