import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function App() {
  const [submittedMessage, setSubmittedMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Name must contain at least 2 characters')
        .required('Name is required'),

      email: Yup.string()
        .email('Enter a valid email address')
        .required('Email is required'),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log('Submitted values:', values);
      setSubmittedMessage(
        `Form submitted successfully for ${values.name} (${values.email})`
      );
      resetForm();
    },
  });

  return (
    <div className="contact-demo">
      <form className="form-card" onSubmit={formik.handleSubmit} noValidate>
        <h2>Formik Contact Form</h2>
        <p>Enter your name and email address.</p>

        <div className="form-group">
          <label htmlFor="name">Name</label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="name"
            aria-invalid={Boolean(formik.touched.name && formik.errors.name)}
            aria-describedby={
              formik.touched.name && formik.errors.name
                ? 'name-error'
                : undefined
            }
          />

          {formik.touched.name && formik.errors.name && (
            <span id="name-error" className="error" role="alert">
              {formik.errors.name}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="email"
            aria-invalid={Boolean(formik.touched.email && formik.errors.email)}
            aria-describedby={
              formik.touched.email && formik.errors.email
                ? 'email-error'
                : undefined
            }
          />

          {formik.touched.email && formik.errors.email && (
            <span id="email-error" className="error" role="alert">
              {formik.errors.email}
            </span>
          )}
        </div>

        <button type="submit">Submit</button>

        {submittedMessage && (
          <p className="success" role="status">
            {submittedMessage}
          </p>
        )}
      </form>
    </div>
  );
}

export default App;
