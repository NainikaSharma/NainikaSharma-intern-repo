import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
export default function UserForm() {
  const [submitted, setSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: { name: '', email: '' },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    }),
    onSubmit: (values) => {
      console.log('Form Submitted:', values);
      setSubmitted(true);
    },
  });
  return (
    <form className="form-card" onSubmit={formik.handleSubmit} noValidate>
      <h2>Your details</h2>
      <p>Enter your name and email to try form validation.</p>
      {['name', 'email'].map((field) => (
        <div className="form-group" key={field}>
          <label htmlFor={`user-${field}`}>
            {field === 'name' ? 'Name' : 'Email'}
          </label>
          <input
            id={`user-${field}`}
            type={field === 'email' ? 'email' : 'text'}
            name={field}
            autoComplete={field}
            placeholder={field === 'name' ? 'Your name' : 'you@example.com'}
            onChange={(event) => {
              setSubmitted(false);
              formik.handleChange(event);
            }}
            onBlur={formik.handleBlur}
            value={formik.values[field]}
            aria-invalid={Boolean(
              formik.touched[field] && formik.errors[field]
            )}
            aria-describedby={
              formik.touched[field] && formik.errors[field]
                ? `user-${field}-error`
                : undefined
            }
          />
          {formik.touched[field] && formik.errors[field] && (
            <span id={`user-${field}-error`} className="error" role="alert">
              {formik.errors[field]}
            </span>
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
      {submitted && (
        <p className="success" role="status">
          Form submitted successfully! This exercise does not send your details
          to a server.
        </p>
      )}
    </form>
  );
}
