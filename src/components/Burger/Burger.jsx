import { useSelector } from 'react-redux';
import { StyledBurger } from './BurgerStyle';
import { selectTheme } from '../../utils/selectors';

const Burger = ({ navOpen, setNavOpen}) => {

  const theme = useSelector(selectTheme);

  return (
    
    <StyledBurger theme={theme} navOpen={navOpen} onClick={() => setNavOpen(!navOpen)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;