import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const CallToActionForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Whoops, make sure it's an email")
          .required("Whoops, make sure it's an email"),
      })}
      onSubmit={(values, actions) => {
        console.log(JSON.stringify(values));
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {(formik) => (
        <Form className="grid grid-cols-1 gap-4 ">
          <label className="w-full relative">
            <span className="sr-only">Enter your email address</span>
            {formik.errors.email && formik.touched.email && (
              <img
                src="/assets/icon-error.svg"
                alt=""
                className="absolute w-5 h-5 z-20 top-[0.875rem] right-4 "
              />
            )}
            <Field
              type="email"
              name="email"
              placeholder="Enter your email address"
              className={`block relative z-10 w-full h-12 pl-5 pr-10 rounded-md font-sans text-sm text-dark ${
                formik.errors.email && formik.touched.email ? "border-2 border-red" : ""
              }`}
            />
            <span
              className={` block relative z-0 ${
                formik.errors.email && formik.touched.email
                  ? "font-sans font-medium text-white text-xs px-3 pt-3 mt-[-0.5rem] pb-1.5 bg-red rounded-md"
                  : ""
              }`}
            >
              <ErrorMessage name="email"></ErrorMessage>
            </span>
          </label>
          <button
            type="submit"
            className={`w-full h-12 text-white font-sans text-sm font-medium bg-red rounded-md 
              shadow-[0px_8px_8px_-4px_rgba(73,93,207,.20012)]
              hover:border-2 hover:bg-white hover:text-red
            `}
          >
            Contact Us
          </button>
        </Form>
      )}
    </Formik>
  );
};
