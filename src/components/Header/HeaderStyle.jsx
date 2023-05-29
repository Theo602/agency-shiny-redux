import styled from 'styled-components';
import devices from '../../utils/responsive/devices';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 150px;
`;

export const FigureLogo = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImgLogo = styled.img`
    width: 80%;
   
    @media screen and ${devices.tabletL} {
        width: 100%;     
    }
`;

export const Nav = styled.nav`
    padding-right: 2%;

    @media screen and ${devices.tabletL} {
        display: none;     
    }
`;