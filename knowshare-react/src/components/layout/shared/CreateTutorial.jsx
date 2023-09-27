import ButtonSolid from "../Atoms/ButtonSolid";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import UserService from "../../../services/userService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateTutorial = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [processing, setProcessing] = useState(false);

  const initialValues = {
    title: "",
    description: "",
    sections: [{ title: "" }],
    requirements: "",
    paid: false,
    cost: 0,
  };
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    sections: Yup.array().of(
      Yup.object().shape({
        title: Yup.string().required("Add at least one section"),
      })
    ),
    requirements: Yup.string(),
    paid: Yup.boolean(),
    cost: Yup.number().when("paid", {
      is: true,
      then: Yup.number().required("Cost is required for paid courses"),
    }),
  });

  const handleSubmit = async (values) => {
    console.log("values", values);
    setProcessing(true);
    const uploadformData = new FormData();

    uploadformData.append("files", selectedVideo);
    uploadformData.append("description", values.description);
    uploadformData.append("title", values.title);
    uploadformData.append("type", "video");

    try {
      console.log("processing");
      await UserService.uploadContent(uploadformData);
      await UserService.createCourse(values);
      toast.success("Course Created successfully");
      navigate("/dashboard?upload=successfull");
    } catch (error) {
      console.log(error);
    }
    setProcessing(false);
  };

  const handleVideoUpload = (file) => {
    setSelectedVideo(file);
  };

  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    lectures: [],
    sections: [],
    requirements: "",
    paid: false,
    cost: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  return (
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold text-center mb-8">Create Course</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
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

            <div className="container mx-auto p-4">
              <FieldArray name="sections">
                {(arrayHelpers) => (
                  <div className="mb-4">
                    <label className="block text-gray-600">sections</label>
                    {formik.values.sections.map((lecture, index) => (
                      <div key={index} className="mb-2">
                        <Field
                          type="text"
                          name={`sections[${index}].title`}
                          className="border rounded p-2 w-full focus:ring focus:ring-blue-400"
                          placeholder={`Lecture ${index + 1} title`}
                        />
                        <ErrorMessage
                          name={`sections[${index}].title`}
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                    ))}
                    <ButtonSolid
                      type="button"
                      label="Add Lecture"
                      onClick={() =>
                        arrayHelpers.push({ title: "", contentId: "" })
                      }
                    />
                  </div>
                )}
              </FieldArray>

              {/* Requirements */}
              <div className="mb-4">
                <label htmlFor="requirements" className="block text-gray-600">
                  Requirements
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  className="border rounded p-2 w-full focus:ring focus:ring-blue-400"
                  placeholder="Requirements for the course"
                  value={courseData.requirements}
                  onChange={handleInputChange}
                />
              </div>

              {/* Paid */}
              <div className="mb-4">
                <label htmlFor="paid" className="block text-gray-600">
                  Paid
                </label>
                <Field
                  as="select"
                  id="paid"
                  name="paid"
                  className="border rounded p-2 w-full focus:ring focus:ring-blue-400"
                  value={courseData.paid}
                  onChange={handleInputChange}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </Field>
              </div>

              {/* Cost */}
              {courseData.paid && (
                <div className="mb-4">
                  <label htmlFor="cost" className="block text-gray-600">
                    Cost
                  </label>
                  <Field
                    type="number"
                    id="cost"
                    name="cost"
                    className="border rounded p-2 w-full focus:ring focus:ring-blue-400"
                    placeholder="Cost of the paid course"
                    value={courseData.cost}
                    onChange={handleInputChange}
                  />
                </div>
              )}

              {/* Submit Button */}

              <ButtonSolid
                loading={processing}
                type="submit"
                label={processing ? "Creating Course..." : "Create Course"}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateTutorial;
