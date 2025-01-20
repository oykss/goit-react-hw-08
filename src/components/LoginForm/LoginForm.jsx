import { Button } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

const initialValues = { email: '', password: '' };

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, action) => {
    dispatch(logIn(value));
    action.resetForm();
  };

  return (
    <div className="wrap">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="form">
          <p className="title">Log In</p>
          <p className="message">Log in now and get full access to our app.</p>
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
    </div>
  );
};
