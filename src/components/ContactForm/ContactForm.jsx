import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short user name!")
    .max(50, "User name too long!")
    .required("This is required!"),
  number: Yup.string()
    .min(3, "Too short user number!")
    .max(50, "User number too long!")
    .required("This is required!"),
});

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const id = nanoid();
    const contactId = { ...values, id };
    onAdd(contactId);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: " ",
        number: " ",
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <div className={css.box}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name:
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.box}>
          <label className={css.label} htmlFor={numberFieldId}>
            Number:
          </label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
