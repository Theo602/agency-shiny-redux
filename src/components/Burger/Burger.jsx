import { useDispatch, useSelector } from 'react-redux';
import { StyledBurger } from './BurgerStyle';
import { selectNavBar, selectTheme } from '../../utils/selectors';
import * as navBarAction from '../../features/navBar';

const Burger = () => {

  const theme = useSelector(selectTheme);
  const navBar = useSelector(selectNavBar);
  const dispatch = useDispatch();
   
  return (
    
    <StyledBurger theme={theme} navBar={navBar} onClick={() => dispatch(navBarAction.toogle())}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;