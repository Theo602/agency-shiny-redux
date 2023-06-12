import styled from 'styled-components';
import devices from '../../utils/responsive/devices';
import colors from '../../utils/style/color';

export const StyledBurger = styled.button`
  display: none;
  position: ${({ navBar }) => navBar ? 'fixed' : 'absolute'};
  top: 5%;
  right: 5%;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  @media screen and ${devices.tabletL} {
    display: flex;     
  }

  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background-color: ${({ theme }) => (theme === "light" ? colors.colorBlack : colors.colorWhite)};

    :first-child {
        transform: ${({ navBar }) => navBar ? 'rotate(45deg)' : 'rotate(0)'};
      }
  
      :nth-child(2) {
        opacity: ${({ navBar }) => navBar ? '0' : '1'};
        transform: ${({ navBar }) => navBar ? 'translateX(20px)' : 'translateX(0)'};
      }
  
      :nth-child(3) {
        transform: ${({ navBar }) => navBar ? 'rotate(-45deg)' : 'rotate(0)'};
      }
  }
`;