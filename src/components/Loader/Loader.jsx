import { CircularProgress } from '@mui/material';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.wrap}>
      <CircularProgress color="inherit" />
    </div>
  );
}
