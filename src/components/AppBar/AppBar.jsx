import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { AuthNav } from '../AuthNav/AuthNav';
import Container from '../Container/Container';
import { UserMenu } from '../UserMenu/UserMenu';
import css from './AppBar.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Container className={css.content}>
        <NavLink className={css.home} to="/">
          Home
        </NavLink>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </header>
  );
};
