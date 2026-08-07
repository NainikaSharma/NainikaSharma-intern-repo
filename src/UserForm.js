import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function UserForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },

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
      alert('Form submitted successfully!');
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ maxWidth: '400px', margin: 'auto' }}
    >
      <h2>User Form</h2>

      {/* Name */}
      <div style={{ marginBottom: '1rem' }}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <p style={{ color: 'red' }}>{formik.errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div style={{ marginBottom: '1rem' }}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <p style={{ color: 'red' }}>{formik.errors.email}</p>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
