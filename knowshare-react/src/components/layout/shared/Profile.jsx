import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ButtonSolid from "../Atoms/ButtonSolid";
import UserService from "../../../services/userService";

const dummyProfileData = {
  name: "John Doe",
  email: "john@example.com",
  bio: "This is my bio.",
  profileImage: "", // Add a URL or file reference here
  skills: "JavaScript, React, HTML, CSS", // Comma-separated skills
  certifications: "Certification 1, Certification 2", // Comma-separated certifications
  linkedin: "https://linkedin.com/in/johndoe",
  github: "https://github.com/johndoe",
  twitter: "https://twitter.com/johndoe",
};

const Profile = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    bio: Yup.string().max(250, "Bio must be 250 characters or less"),
    skills: Yup.string(),
    certifications: Yup.string(),
    linkedin: Yup.string().url("Invalid URL format"),
    github: Yup.string().url("Invalid URL format"),
    twitter: Yup.string().url("Invalid URL format"),
  });

  const handleSubmit = async (values) => {
    const data = {
      profilePicture: imagePreview,
    };
    const result = await UserService.saveProfilePhoto(data);
    console.log("result", result);
    // Handle form submission here (e.g., send data to the server)
    console.log(values);
  };

  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageDataUrl = e.target.result;
      setImagePreview(imageDataUrl);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <Formik
        initialValues={dummyProfileData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {/* ... Other fields ... */}

          {/* Profile Image */}
          <div className="mb-4">
            <img src={imagePreview || ""} alt="" />
            <label
              htmlFor="profileImage"
              className="block text-sm font-medium text-gray-700"
            >
              Profile Image
            </label>
            <Field
              type="file"
              id="profileImage"
              name="profileImage"
              accept="image/*"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) => handleImageUpload(e.target.files[0])}
            />
            <ErrorMessage
              name="profileImage"
              component="p"
              className="text-red-600"
            />
          </div>

          {/* Skills */}
          <div className="mb-4">
            <label
              htmlFor="skills"
              className="block text-sm font-medium text-gray-700"
            >
              Skills
            </label>
            <Field
              as="textarea"
              id="skills"
              name="skills"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="skills"
              component="p"
              className="text-red-600"
            />
          </div>

          {/* Certifications */}
          <div className="mb-4">
            <label
              htmlFor="certifications"
              className="block text-sm font-medium text-gray-700"
            >
              Certifications
            </label>
            <Field
              as="textarea"
              id="certifications"
              name="certifications"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="certifications"
              component="p"
              className="text-red-600"
            />
          </div>

          {/* Social Media Links */}
          <div className="mb-4">
            <label
              htmlFor="linkedin"
              className="block text-sm font-medium text-gray-700"
            >
              LinkedIn Profile
            </label>
            <Field
              type="url"
              id="linkedin"
              name="linkedin"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="linkedin"
              component="p"
              className="text-red-600"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="github"
              className="block text-sm font-medium text-gray-700"
            >
              GitHub Profile
            </label>
            <Field
              type="url"
              id="github"
              name="github"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="github"
              component="p"
              className="text-red-600"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="twitter"
              className="block text-sm font-medium text-gray-700"
            >
              Twitter Profile
            </label>
            <Field
              type="url"
              id="twitter"
              name="twitter"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="twitter"
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

export default Profile;
