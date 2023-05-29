import styled from 'styled-components';
import colors from '../../utils/style/color';
import devices from '../../utils/responsive/devices';

export const ContainerQuestion = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    min-height: calc(100vh - 200px);
`;

export const TittleQuestion = styled.h2`
    color: ${({ theme }) => (theme === "light" ? colors.primary : colors.colorWhite)};
    font-size: 25px;
    text-align: center;
`;

export const ContentQuestion = styled.p`
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    font-size: 20px;
    padding: 20px;
    text-align: center;
`;

export const ContainerArrow = styled.div`
    padding: 20px;

    & a{
        color:${({ theme }) => (theme === "light" ? colors.colorBlack : colors.colorWhite)};
        font-size: 18px;
        margin: 20px;
        text-decoration: none;
        &:hover{
            color: ${({ theme }) => (theme === "light" ? colors.primary : colors.colorBlack)};
            transition: 1s;
        }
    }
`;

export const ContentError = styled.p`
    color: ${({ theme }) => (theme === "light" ? colors.primary : colors.colorWhite)};
    font-size: 25px;
    text-align: center;
    padding: 4%;
    min-height: calc(100vh - 200px);
`;

export const ContainerReply = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ReplyBox = styled.button`
  border: none;
  height: 80px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => (theme === "light" ? colors.backgroundLight : colors.backgroundDark)};
  color: ${({ theme }) => (theme === "light" ? colors.colorBlack : colors.colorWhite)};
  border-radius: 30px;
  cursor: pointer;
  margin: 0 20px;
  font-size: 18px;

  @media screen and ${devices.tabletM} {
    margin: 0 10px;
  }

  @media screen and ${devices.mobileL} {
    margin: 10px;
    height: 50px;
    width: 160px;
  }

  @media screen and ${devices.mobileM} {
    height: 40px;
    width: 130px;
  }

  @media screen and ${devices.mobileM} {
    width: 100px;
  }

  box-shadow: ${(props) => 
        props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
    }
`;