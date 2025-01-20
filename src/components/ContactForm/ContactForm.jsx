import { Field, Form, Formik } from 'formik';
import { VscAdd } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';

const initialValues = { name: '', number: '' };

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values }));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className="textInputWrapper">
          <Field
            className="textInput"
            name="name"
            type="text"
            placeholder="Contact name"
          />
        </label>
        <label className="textInputWrapper">
          <Field
            className="textInput"
            name="number"
            type="text"
            placeholder="Telephone number"
          />
        </label>
        <button type="submit" className={css.btn}>
          <VscAdd className={css.icon} />
          Add
        </button>
      </Form>
    </Formik>
  );
}
