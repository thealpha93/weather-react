import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import * as yup from 'yup';

import { signup } from '../../services/authService';

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    dateOfBirth: yup
      .date('Enter your date of birth')
      .required('Date of Birth is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    confirmPassword: yup
      .string('Confirm your password')
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      dob: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        setLoading(true);

        const formattedValues = {
          email: values.email,
          password: values.password,
          dob: values.dateOfBirth?.format('YYYY-MM-DD')
        };
        await signup(formattedValues);
        // Handle response, navigate etc.
        navigate('/login');
      } catch (error) {
        console.error('Signup failed', error);
      } finally {
        setLoading(false);
      }
    }
  });

  return {
    handleChange: formik.handleChange,
    handleSubmit: formik.handleSubmit,
    setFieldValue: formik.setFieldValue,
    values: formik.values,
    errors: formik.errors,
    loading
  };
};

export default useSignup;
