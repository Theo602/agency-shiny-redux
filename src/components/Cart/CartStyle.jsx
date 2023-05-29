import styled from 'styled-components';
import colors from '../../utils/style/color';


export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    background-color: ${({ theme }) => (theme === "light" ? colors.backgroundLight : colors.backgroundDark)};
    border-radius: 30px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px ${({ theme }) => (theme === "light" ? '#e2e3e9' : '#312298')};  
    }
`;

export const CardLabel = styled.p`
    color: ${({ theme }) => (theme === "light" ? colors.primary : colors.colorWhite)};
    font-size: 20px;
    font: weight: bold;
    word-break: break-all;
}
`;

export const CardTitle = styled.p`
    text-align: center;
    font-size: 18px;
    word-break: break-all;
    color: ${({ theme }) => (theme === "light" ? colors.colorBlack : colors.colorWhite)};
}
`;

export const CardImage = styled.img`
    border-radius: 50%;
    margin: 20px auto;
    height: 140px;
    width: 140px;
`;

