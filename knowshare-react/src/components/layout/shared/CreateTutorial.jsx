import ButtonSolid from "../Atoms/ButtonSolid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import UserService from "../../../services/userService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateTutorial = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [processing, setProcessing] = useState(false);
  const initialValues = {
    videoFile: null,
    title: "",
    description: "",
  };
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    // videoFile: Yup.mixed().required("Video file is required"),
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
  });

  const handleSubmit = async (values) => {
    setProcessing(true);
    const formData = new FormData();
    formData.append("files", selectedVideo);
    formData.append("description", values.description);
    formData.append("title", values.title);
    formData.append("type", "video");

    const newValues = {
      files: selectedVideo,
      description: values.description,
      title: values.title,
      type: "video",
    };
    console.log("newValues", newValues);

    try {
      console.log("processing");
      await UserService.uploadContent(formData);
      toast.success("Video Uploaded successfully");
      navigate("/dashboard?upload=successfull");
    } catch (error) {
      console.log(error);
    }
    setProcessing(false);
  };

  const handleVideoUpload = (file) => {
    setSelectedVideo(file);
  };

  return (
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold text-center mb-8">Upload Video</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form
          action="/upload"
          method="POST"
          encType="multipart/form-data"
          className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
        >
          {/* ... Form Fields ... */}

          <div className="mb-4">
            <label htmlFor="videoFile" className="block text-gray-600">
              Select Video:
            </label>
            <Field
              onChange={(e) => handleVideoUpload(e.target.files[0])}
              type="file"
              id="videoFile"
              name="videoFile"
              className="border rounded p-2 w-full focus:ring focus:ring-blue-400"
            />
            <ErrorMessage
              name="videoFile"
              component="div"
              className="text-red-600"
            />
          </div>

          <div className="mb-4">
            <label for="title" class="block text-gray-600">
              Title:
            </label>
            <Field
              type="text"
              id="title"
              name="title"
              class="border rounded p-2 w-full focus:ring focus:ring-blue-400"
              placeholder="Enter video title"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-600"
            />
          </div>
          <div class="mb-4">
            <Field
              as="textArea"
              id="description"
              name="description"
              class="border rounded p-2 w-full focus:ring focus:ring-blue-400 h-auto"
              placeholder="Enter video description"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-600"
            />
          </div>

          <ButtonSolid
            type="submit"
            loading={processing}
            label={processing ? "Uploading..." : "Upload"}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default CreateTutorial;
