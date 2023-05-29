import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './color'


export const StyleLink = styled(Link)`
    padding: 20px; 
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    color: ${({ $theme }) => ($theme === "light" ? colors.primary : colors.colorWhite)};
    &:hover{
        text-decoration: underline ${({ $theme }) => ($theme === "light" ? colors.primary : colors.colorWhite)};
    }
    ${(props) => 
        props.$isFullLink &&
        `
            color: ${colors.colorWhite};
            border: 1px solid transparent; 
            padding: 15px 25px;
            border-radius: 30px;
            background-color: ${(props.$isFullLink === "light" ? colors.primary : colors.backgroundDark)};; 
            font-weight: bold;
            &:hover{
                text-decoration: none;
                color: ${(props.$isFullLink === "light" ? colors.colorWhite : colors.colorDefaut)};
                background-color: ${(props.$isFullLink === "light" ? colors.textTitle : colors.colorWhite)};
                transition: 2s;
         }`
    }

`;


export const PageLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    padding: 15px 25px;
    border-radius: 30px;
    border: 1px solid transparent; 
    color: ${({ $theme }) => ($theme === "light" ? colors.colorWhite : colors.colorDefaut)};
    background-color: ${({ $theme }) => ($theme === "light" ? colors.primary : colors.colorWhite)};

    ${(props) => 
        props.$theme &&
        `
            &:hover{
                text-decoration: none;
                color: ${colors.colorWhite};
                background-color: ${(props.$theme === "light" ? colors.textTitle : colors.colorDefaut)};
                transition: 2s;
         }`
    
    }
`;