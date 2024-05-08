import css from './ContactForm.module.css';
import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const ContactForm = ({ onAdd }) => {

const initValues = { name: '', number: '' };
const fieldId = useId();  
    
 const handleSubmit = (values, {resetForm}) => {
    onAdd(values);
    resetForm();
    };

    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
   });

    return (
    <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form className={css.form}>
                <label
                    htmlFor={`${fieldId}-name`} className={css.label}>
                    Name
                </label>
                <Field type="text" name="name" id={`${fieldId}-name`}
                    className={css.input} />
                 <ErrorMessage name="name" component="span" className={css.errorMessage}/>
                <label
                    htmlFor={ `${fieldId}-number`} className={css.label}>
                    Number
                </label>
                <Field type="tel" name="number" id={`${fieldId}-number`}
                    className={css.input} />
                 <ErrorMessage name="number" component="span" className={css.errorMessage} />
                <div className={css.buttonWrapper}>
                    <button type='submit'
                    className={css.button}>
                        Add contact
                    </button>
                </div>
      </Form>
    </Formik>
    )
}

export default ContactForm;