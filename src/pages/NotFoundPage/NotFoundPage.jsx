import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className={css.wrap}>
      <Button variant="contained" type="button" onClick={() => navigate(-1)}>
        Back
      </Button>
      <Button
        variant="contained"
        type="button"
        onClick={() => window.location.reload()}
      >
        Reload Page
      </Button>
    </div>
  );
}
