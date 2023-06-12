import styled from 'styled-components';
import devices from '../../utils/responsive/devices';
import { StyleLink } from '../../utils/style/BtnLink';
import colors from '../../utils/style/color';

export const NavResponsive = styled.nav`
    
    display: none;

    @media screen and ${devices.tabletL} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background-color: ${({ theme }) => (theme === "light" ? colors.colorWhite : '#2F2E41')};
        transform: ${({ navBar }) => navBar ? 'translateX(0)' : 'translateX(-100%)'};
        transition: transform 0.9s ease-in-out;
        z-index: 1;
        ${StyleLink}{
            font-size: 30px;
        }    
    }

`;