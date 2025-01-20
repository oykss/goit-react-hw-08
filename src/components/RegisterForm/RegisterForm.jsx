import { Button } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const initialValues = { name: '', email: '', password: '' };

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, action) => {
    dispatch(register(value));
    action.resetForm();
  };

  return (
    <div className="wrap">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="form">
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>
          <label className="textInputWrapper">
            <Field
              className="textInput"
              type="text"
              name="name"
              placeholder="Name"
            />
          </label>
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
