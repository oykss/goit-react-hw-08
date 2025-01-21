import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <NavLink className={css.home} to="/">
      Home
    </NavLink>
  );
}
