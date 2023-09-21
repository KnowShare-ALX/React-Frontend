import { useState } from "react";
import ButtonSolid from "../components/layout/Atoms/ButtonSolid";
import Logo from "../components/layout/common/Logo";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthService from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { setUserEmail } from "../redux/auth";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState("Login");

  const { userEmail } = useSelector((state) => {
    const { userEmail } = state.auth;
    return { userEmail };
  }, shallowEqual);

  console.log("userEmail", userEmail);

  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({});

  const [loginFormValues, setLoginFormValues] = useState({
    email: "",
    password: "",
  });

  const [signupFormValues, setSignupFormValues] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const validationSchemaSignup = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
  });

  // Validation schemas as before

  const handleTabChange = (tab) => {
    setSelectedTab(tab);

    // Reset form values when tab changes
    if (tab === "Login") {
      setLoginFormValues({
        email: "",
        password: "",
      });
    } else if (tab === "SignUp") {
      setSignupFormValues({
        email: "",
        password: "",
        fullName: "",
      });
    }
  };

  const handleSignup = async (values, actions) => {
    const data = {
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
    };

    const result = await AuthService.signup(data);

    console.log("result", result);
    // Add signup logic here (e.g., validate input and create a new user account)

    // Call actions.setSubmitting(false) to indicate that form submission is complete
    actions.setSubmitting(false);
  };

  const handleLogin = async (values, actions) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    console.log("data", data);
    // try {
    const result = await AuthService.login(data);
    if (result.data.token) {
      localStorage.setItem("token", result.data.token);
      actions.setSubmitting(false);
      dispatch(setUserEmail(values.email));
      console.log("login successfull");
      navigate("/");
    }
    // } catch (ex) {
    //   const error = { ...errors };
    //   error.email = ex.response.data.error;
    //   setErrors(error);
    // }
  };

  return (
    <>
      <div class="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <Logo />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to Knowshare
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Your platform for learning and sharing knowledge.
          </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div class="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <div class="flex justify-between mb-6">
              <button
                onClick={() => handleTabChange("Login")}
                class="w-1/2 py-2 text-sm font-medium focus:text-[#0f7173] border-b-2 focus:outline-none focus:ring-[#0f7173] focus:border-[#0f7173]"
                id="login-tab"
              >
                Login
              </button>
              <button
                onClick={() => handleTabChange("SignUp")}
                class="w-1/2 py-2 text-sm font-medium focus:text-[#0f7173] border-b-2 focus:outline-none focus:ring-[#0f7173] focus:border-[#0f7173]"
                id="signup-tab"
              >
                Sign Up
              </button>
            </div>

            {selectedTab === "Login" ? (
              <Formik
                initialValues={loginFormValues}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
              >
                <Form
                  id="login-form"
                  class="space-y-6"
                  action="#"
                  method="POST"
                >
                  <div>
                    <label
                      for="login-email"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div class="mt-1">
                      <Field
                        type="email"
                        name="email"
                        class="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0f7173] focus:border-[#0f7173] sm:text-sm"
                        placeholder="Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                      {errors.email && (
                        <div className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div class="space-y-1">
                    <label
                      for="login-password"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div class="mt-1">
                      <Field
                        type="password"
                        name="password"
                        class="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0f7173] focus:border-[#0f7173] sm:text-sm"
                        placeholder="Password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        class="h-4 w-4 text-[#0f7173] focus:ring-[#0f7173] focus:border-[#0f7173] border-gray-300 rounded"
                      />
                      <label
                        for="remember-me"
                        class="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div class="text-sm">
                      <a
                        href="/"
                        class="font-medium text-[#0f7173] hover:text-[#0f7173]"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    {/* <button
                    type="submit"
                    class="w-full py-2 text-sm font-medium text-white bg-[#0f7173] hover:bg-[#378a8b] focus:outline-none "
                  >
                    Sign in
                  </button> */}
                    <ButtonSolid type="submit" label="Login" />
                  </div>
                </Form>
              </Formik>
            ) : (
              <Formik
                initialValues={signupFormValues}
                validationSchema={validationSchemaSignup}
                onSubmit={handleSignup}
              >
                <Form class="space-y-6 flex flex-col" action="#" method="POST">
                  <div>
                    <label
                      for="signup-name"
                      class="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <div class="mt-1">
                      <Field
                        type="firstName"
                        name="firstName"
                        class="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0f7173] focus:border-[#0f7173] sm:text-sm"
                        placeholder="Full Name"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      for="signup-name"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <div class="mt-1">
                      <Field
                        type="lastName"
                        name="lastName"
                        class="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0f7173] focus:border-[#0f7173] sm:text-sm"
                        placeholder="Full Name"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      for="signup-email"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div class="mt-1">
                      <Field
                        type="email"
                        name="email"
                        class="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0f7173] focus:border-[#0f7173] sm:text-sm"
                        placeholder="Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div class="space-y-1">
                    <label
                      for="signup-password"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div class="mt-1">
                      <Field
                        type="password"
                        name="password"
                        class="w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0f7173] focus:border-[#0f7173] sm:text-sm"
                        placeholder="Password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div class="text-sm flex justify-between items-center w-full">
                    <div>
                      {/* <button
                type="submit"
                class="w-full py-2 text-sm font-medium text-white bg-[#0f7173] hover:bg-[#378a8b] focus:outline-none "
              >
                Sign up
              </button> */}
                      <ButtonSolid type="submit" label="Sign Up" />
                    </div>
                    <div
                      onClick={() => handleTabChange("Login")}
                      class="font-medium text-[#0f7173] hover:text-[#0f7173] cursor-pointer"
                    >
                      Already have an account? Log in
                    </div>
                  </div>
                </Form>
              </Formik>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
