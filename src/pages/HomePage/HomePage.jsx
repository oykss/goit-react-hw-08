import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './HomePage.module.css';

export default function HomePage() {
  const [message, setMessage] = useState('');
  const isRefreshing = useSelector(selectIsLoggedIn);

  useEffect(() => {
    setMessage(
      !isRefreshing
        ? 'Welcome to your Phonebook App 📱. Please Log in 🔑 or Sign up ✨ to get started.'
        : `Welcome back to your Phonebook App 📱! You're logged in. Enjoy managing your contacts!`
    );
  }, [isRefreshing]);

  return (
    <div className={css.wrap}>
      <h1 className={clsx('title', css.title)}>{message}</h1>
    </div>
  );
}
