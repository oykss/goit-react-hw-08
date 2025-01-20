import { Button } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const initialValues = { email: '', password: '' };

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, action) => {
    dispatch(logIn(value));
    action.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className="textInputWrapper">
          <Field
            className="textInput"
            type="email"
            name="email"
            placeholder="Email"
          />
        </label>
        <label className="textInputWrapper">
          <Field
            className="textInput"
            type="password"
            name="password"
            placeholder="Password"
          />
        </label>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};
