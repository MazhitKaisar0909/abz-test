import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        gender: '',
        photo: null,
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Error text'),
        email: Yup.string().email('Invalid email address').required('Error text'),
        phone: Yup.string().required('Error text'),
        gender: Yup.string().required('Error text'),
        photo: Yup.mixed().required('Error text'),
    });

    const onSubmit = (values, { setSubmitting }) => {
        console.log('Form data', values);
        setTimeout(() => {
            setSubmitting(false);
        }, 500);
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className='text-4xl text-center'>
                Working with POST request
            </h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting, isValid, setFieldValue, errors, touched }) => (
                    <Form className="bg-white p-6 rounded-lg">
                        <div className="mb-4">
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                className={`mt-1 block w-full px-3 py-2 border ${errors.name && touched.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-[380px] h-[54px]`}
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1" />
                        </div>
                        <div className="mb-4">
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className={`mt-1 block w-full px-3 py-2 border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-[380px] h-[54px]`}
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                        </div>
                        <div className="mb-4">
                            <Field
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Phone"
                                className={`mt-1 block w-full px-3 py-2 border ${errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-[380px] h-[54px]`}
                            />
                            <ErrorMessage name="phone" component="div" className="text-red-500 text-xs mt-1" />
                            <label htmlFor="phone" className="block font-medium text-label ml-2.5 text-xs">
                                +38 (XXX) XXX - XX - XX
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-base">Select your position</label>
                            <div role="group" className="mt-2 flex flex-col">
                                <label className="mr-4">
                                    <Field type="radio" name="gender" value="male" className="mr-2" />
                                    Frontend developer
                                </label>
                                <label className="mr-4">
                                    <Field type="radio" name="gender" value="female" className="mr-2" />
                                    Backend developer
                                </label>
                                <label className="mr-4">
                                    <Field type="radio" name="gender" value="other" className="mr-2" />
                                    Designer
                                </label>
                                <label className="mr-4">
                                    <Field type="radio" name="gender" value="preferNotToSay" className="mr-2" />
                                    QA
                                </label>
                            </div>
                            <ErrorMessage name="gender" component="div" className="text-red-500 text-xs mt-1" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Upload your photo</label>
                            <input
                                id="photo"
                                name="photo"
                                type="file"
                                onChange={(event) => {
                                    setFieldValue("photo", event.currentTarget.files[0]);
                                }}
                                className={`mt-1 block w-full px-3 py-2 border ${errors.photo && touched.photo ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-[380px] h-[54px]`}
                            />
                            <ErrorMessage name="photo" component="div" className="text-red-500 text-xs mt-1" />
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={isSubmitting || !isValid}
                                className={`w-[100px] h-[34px] rounded-[80px] ${isSubmitting || !isValid ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary hover:bg-hover'
                                    }`}
                            >
                                Sign Up
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SignupForm;
