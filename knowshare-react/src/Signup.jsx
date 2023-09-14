import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Signup() {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">Sign in to your account</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          // Add signup logic here (e.g., validate input and create a new user account)
          console.log('Signup form submitted:', values);

          // Call actions.setSubmitting(false) to indicate that form submission is complete
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <Field
                type="email"
                name="email"
                autoComplete="email"
                required
                className="block w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 sm:text-sm"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <Field
                type="password"
                name="password"
                autoComplete="current-password"
                required
                className="block w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 sm:text-sm"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-lg bg-indigo-600 text-white font-semibold text-sm ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
