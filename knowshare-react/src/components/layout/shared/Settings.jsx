import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ButtonSolid from "../Atoms/ButtonSolid";

const dummyData = {
  email: "user@example.com",
  username: "username123",
  password: "********",
};

const Settings = () => {
  const initialValues = {
    email: "",
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    username: Yup.string()
      .min(6, "Username must be at least 6 characters")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
  });

  const handleSubmit = (values) => {
    // Handle form submission here (e.g., send data to the server)
    console.log(values);
  };

  return (
    <div className="p-4 w-4/5 lg:w-2/5 lg:mt-8">
      <h2 className="text-2xl font-bold mb-4 ">Settings</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage name="email" component="p" className="text-red-600" />
          </div>

          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <Field
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-600"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-600"
            />
          </div>

          <ButtonSolid type="submit" label="Save" />
        </Form>
      </Formik>
    </div>
  );
};

export default Settings;
