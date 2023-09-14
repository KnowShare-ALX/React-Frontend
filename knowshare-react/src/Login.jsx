import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Login() {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            // Add login logic here (e.g., validate credentials and authenticate user)
            console.log('Login form submitted:', values);

            // Call actions.setSubmitting(false) to indicate that form submission is complete
            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-lg border focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-gray-900 sm:text-sm"
                  placeholder="Email"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="w-full px-4 py-2 rounded-lg border focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-gray-900 sm:text-sm"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className={`w-full py-2 px-4 rounded-full bg-indigo-600 text-white font-semibold text-sm ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
