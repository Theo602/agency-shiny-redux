import styled from 'styled-components';
import colors from '../../utils/style/color';
import devices from '../../utils/responsive/devices';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 20px;

  @media screen and ${devices.tabletL} {
    margin: 20px 20px 10px 20px;
  }

`

export const StyledLabel = styled.label`
  color: ${({ theme }) => (theme === 'light' ? colors.colorBlack : colors.colorWhite)};
`

export const StyledInput = styled.input`
  margin: 5px auto;
  padding: 5px;
  border: 2px solid ${colors.colorBlack};
  border-radius: 5px;
  width: 200px;
`