import { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectTheme } from '../selectors';


const StyledGlobalStyle = createGlobalStyle`
    body{
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      background-color: ${({ isDarkMode }) => (isDarkMode ? '#2F2E41' : '#fff')};
    }  

    ::before,
    ::after {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
`;


function GlobalStyle(){
  const theme = useSelector(selectTheme);
    return <StyledGlobalStyle isDarkMode={theme === 'dark'}/>
}


export default GlobalStyle;