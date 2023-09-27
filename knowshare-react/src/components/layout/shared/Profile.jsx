import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ButtonSolid from "../Atoms/ButtonSolid";
import UserService from "../../../services/userService";
import { toast } from "react-toastify";
import { PiUploadSimpleThin } from "react-icons/pi";
import { PiDotDuotone } from "react-icons/pi";
import { shallowEqual, useSelector } from "react-redux";
import useAppHook from "../../../hooks/useAppHook";

const dummyProfileData = {
  firstNameame: "John",
  lastName: "Doe",
  email: "john@example.com",
  biography: "This is my biography.",
  profileImage: "", // Add a URL or file reference here
  skills: "JavaScript, React, HTML, CSS, JavaScript, React, HTML, CSS", // Comma-separated skills
  credentials:
    "Certification 1, Certification 2, Certification 1, Certification 2, Certification 1, Certification 2", // Comma-separated certifications
  linkedin: "https://linkedin.com/in/johndoe",
  github: "https://github.com/johndoe",
  twitter: "https://twitter.com/johndoe",
};

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [saving, setSaving] = useState(false);
  const [change, setChange] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const { userData } = useSelector((state) => {
    const { userData } = state.auth;
    return { userData };
  }, shallowEqual);

  const { getProfile } = useAppHook();

  // const skills = dummyProfileData.skills.split(",");
  // const certifications = dummyProfileData.certifications.split(",");

  const validationSchema = Yup.object({
    firstName: Yup.string(),
    lastName: Yup.string(),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    biography: Yup.string().max(
      250,
      "biography must be 250 characters or less"
    ),
    skills: Yup.string(),
    credentials: Yup.string(),
    linkedin: Yup.string(),
    github: Yup.string(),
    twitter: Yup.string(),
  });

  const handleSubmit = async (values) => {
    setSaving(true);
    console.log("values", values);
    const certs = values?.credentials?.split(",");
    const newValues = {
      ...values,
      credentials: certs.length > 0 ? certs : [],
    };
    console.log("newValues", newValues);
    const formData = new FormData();
    formData.append("profilePicture", selectedImage);

    try {
      await UserService.updateProfile(newValues);
      await UserService.saveProfilePhoto(formData);
      await getProfile(userData.email);
      toast.success("Profile Updated");
    } catch (error) {
      console.log(error);
    }
    setSaving(false);
    setEdit(false);
  };

  const handleImageUpload = (file) => {
    setImageName(file.name);
    setSelectedImage(file);
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageDataUrl = e.target.result;

      setImagePreview(imageDataUrl);
    };

    reader.readAsDataURL(file);
    setChange(false);
  };

  // console.log("userData", userData);

  return (
    <div className="p-4 w-4/5 lg:w-2/5">
      <div className="flex justify-center items-center">
        <h2 className="text-2xl font-bold">Profile</h2>
        {!edit && (
          <ButtonSolid
            onClick={() => setEdit(true)}
            className="text-xs"
            label="edit"
          />
        )}
      </div>

      <Formik
        initialValues={userData || {}}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {/* ... Other fields ... */}

          {/* Profile Image */}
          <div className="mb-4 ">
            <div className="relative">
              <img
                className="w-[8rem] h-[8rem] rounded-full ring-1 ring-neutral-300"
                // src={imagePreview || ""}
                src={
                  imagePreview ||
                  `https://knowshare-backend-alx.vercel.app/user/profilePicture/${userData.id}`
                }
                alt=""
              />
              {!imagePreview && !userData.id && (
                <PiUploadSimpleThin className="w-12 h-12 absolute top-10 left-10" />
              )}
            </div>
            {edit && (
              <>
                {imageName && !change ? (
                  <div className="flex items-center gap-1">
                    <span>
                      {imageName.length > 10
                        ? `${imageName.slice(0, 10)}...${imageName.slice(
                            imageName.length - 3
                          )}`
                        : imageName}
                    </span>
                    <ButtonSolid
                      onClick={() => {
                        setChange(true);
                      }}
                      className="text-xs"
                      label="Change"
                    />
                  </div>
                ) : (
                  <>
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
                  </>
                )}
              </>
            )}
          </div>

          {/*biography*/}

          <div className="mb-4">
            <label
              htmlFor="First Name"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>

            {edit ? (
              <Field
                as="textarea"
                id="firstName"
                name="firstName"
                className="mt-1 p-2 w-full border rounded-md"
              />
            ) : (
              <ul className="py-2 flex gap-2 justify-start items-center border border-0.5 border-neutral-300 max-w-[20rem] min-h-[2rem] rounded p-2">
                <div>{userData.firstName}</div>
              </ul>
            )}

            <ErrorMessage
              name="firstName"
              component="p"
              className="text-red-600"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="Last Name"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>

            {edit ? (
              <Field
                as="textarea"
                id="lastName"
                name="lastName"
                className="mt-1 p-2 w-full border rounded-md"
              />
            ) : (
              <ul className="py-2 flex gap-2 justify-start items-center border border-0.5 border-neutral-300 max-w-[20rem] min-h-[2rem] rounded p-2">
                <div>{userData.lastName}</div>
              </ul>
            )}

            <ErrorMessage
              name="firstName"
              component="p"
              className="text-red-600"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            {edit ? (
              <Field
                as="textarea"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
              />
            ) : (
              <ul className="py-2 flex gap-2 justify-start items-center border border-0.5 border-neutral-300 max-w-[20rem] min-h-[2rem] rounded p-2">
                <div>{userData.email}</div>
              </ul>
            )}

            <ErrorMessage name="email" component="p" className="text-red-600" />
          </div>

          <div className="mb-4">
            <label
              htmlFor="biography"
              className="block text-sm font-medium text-gray-700"
            >
              biography
            </label>

            {edit ? (
              <Field
                as="textarea"
                id="biography"
                name="biography"
                className="mt-1 p-2 w-full border rounded-md"
              />
            ) : (
              <ul className="py-2 flex gap-2 justify-start items-center border border-0.5 border-neutral-300 max-w-[20rem] min-h-[2rem] rounded p-2">
                <div>{dummyProfileData.biography}</div>
              </ul>
            )}

            <ErrorMessage
              name="skills"
              component="p"
              className="text-red-600"
            />
          </div>

          {/* Skills */}
          {/* <div className="mb-4">
            <label
              htmlFor="skills"
              className="block text-sm font-medium text-gray-700"
            >
              Skills
            </label>

            {edit ? (
              <Field
                as="textarea"
                id="skills"
                name="skills"
                className="mt-1 p-2 w-full border rounded-md"
              />
            ) : (
              <ul className="py-2 flex flex-col md:grid md:grid-cols-3 gap-2 flex-grow max-w-[30rem]">
                {userData?.credentials.map((skill) => (
                  <li className="flex items-center justify-start">
                    <PiDotDuotone className="text-[#0f7173]" />
                    {skill}
                  </li>
                ))}
              </ul>
            )}

            <ErrorMessage
              name="skills"
              component="p"
              className="text-red-600"
            />
          </div> */}

          {/* Certifications */}
          <div className="mb-4">
            <label
              htmlFor="credentials"
              className="block text-sm font-medium text-gray-700"
            >
              Certifications
            </label>
            {edit ? (
              <Field
                as="textarea"
                id="credentials"
                name="credentials"
                className="mt-1 p-2 w-full border rounded-md"
              />
            ) : (
              <ul className="py-2 flex flex-col md:grid md:grid-cols-3 gap-2 flex-grow max-w-[30rem]">
                {userData.credentials.map((certification) => (
                  <li className="flex items-center justify-start">
                    <PiDotDuotone className="text-[#0f7173]" />
                    {certification}
                  </li>
                ))}
              </ul>
            )}
            <ErrorMessage
              name="credentials"
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

            {edit ? (
              <Field
                type="url"
                id="linkedin"
                name="linkedin"
                className="mt-1 p-2 w-full border rounded-md"
              />
            ) : (
              <ul className="py-2 flex gap-2 justify-start items-center border border-0.5 border-neutral-300 max-w-[20rem] min-h-[2rem] rounded p-2">
                <div>{userData.linkedin}</div>
              </ul>
            )}

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

            {edit ? (
              <Field
                type="url"
                id="github"
                name="github"
                className="mt-1 p-2 w-full border rounded-md"
              />
            ) : (
              <ul className="py-2 flex gap-2 justify-start items-center border border-0.5 border-neutral-300 max-w-[20rem] min-h-[2rem] rounded p-2">
                <div>{userData.github}</div>
              </ul>
            )}

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

            {edit ? (
              <Field
                type="url"
                id="twitter"
                name="twitter"
                className="mt-1 p-2 w-full border rounded-md"
              />
            ) : (
              <ul className="py-2 flex gap-2 justify-start items-center border border-0.5 border-neutral-300 max-w-[20rem] min-h-[2rem] rounded p-2">
                <div>{userData.twitter}</div>
              </ul>
            )}
            <ErrorMessage
              name="twitter"
              component="p"
              className="text-red-600"
            />
          </div>

          <ButtonSolid
            type="submit"
            loading={saving}
            label={saving ? "Saving..." : "Save"}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default Profile;
