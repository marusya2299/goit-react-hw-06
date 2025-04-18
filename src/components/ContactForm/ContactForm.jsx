import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from "../ContactForm/ContactForm.module.css";

export default function ContactForm({validationSchema, addValue}){
    return (
        <Formik validationSchema={validationSchema} initialValues={{ name: '', number: '' }} 
        onSubmit={(values, { resetForm }) => {
            addValue(values.name, values.number);
            resetForm();
        }}>
             <Form className={css.form}>
                <div className={css.boxInput}>
                    <label className={css.label} htmlFor="name">Name</label>
                    <Field className={css.input} type="text" name="name" id="name" />
                    <ErrorMessage className={css.error} name="name" component="span" />
                </div>

                <div className={css.boxInput}>
                    <label className={css.label} htmlFor="number">Number</label>
                    <Field className={css.input} type="text" name="number" id="number" />
                    <ErrorMessage className={css.error} name="number" component="span" />
                </div>

                <button className={css.button} type="submit">Add Contact</button>
            </Form>
        </Formik>
    )

}