import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.wrap}>
      <NavLink className={css.home} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Button variant="contained">Contacts</Button>
        </NavLink>
      )}
    </div>
  );
}
