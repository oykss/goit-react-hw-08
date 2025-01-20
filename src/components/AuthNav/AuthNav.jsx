import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <nav className={css.wrap}>
      <NavLink className={css.link} to="/register">
        <Button variant="contained">Register</Button>
      </NavLink>
      <NavLink className={css.link} to="/login">
        <Button variant="contained">Log In</Button>
      </NavLink>
    </nav>
  );
};
