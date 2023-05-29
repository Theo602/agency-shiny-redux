import styled from 'styled-components';
import colors from '../../utils/style/color';
import devices from '../../utils/responsive/devices';

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center; 
    background-color: ${({ theme }) => (theme === "light" ? colors.primary : colors.backgroundDark)};
    height: 50px;
    padding: 20px;

    @media screen and ${devices.tabletL} {
        flex-direction: column;
        padding: 40px;
    }

`;

export const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.colorWhite};
    font-size: 16px;
    margin: 0px 20px;

    @media screen and ${devices.tabletL} {
        margin: 10px 20px 20px 20px;
      }
`;