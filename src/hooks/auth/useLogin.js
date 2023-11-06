import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const response = await login(values)
        localStorage.setItem("accessToken", response.access_token)
        localStorage.setItem("refreshToken", response.refresh_token)
        // Save token, handle response, navigate etc.
        navigate('/');
      } catch (error) {
        console.error('Login failed', error);
      } finally {
        setLoading(false);
      }
    },
  });

  return {
    handleChange: formik.handleChange,
    handleSubmit: formik.handleSubmit,
    values: formik.values,
    errors: formik.errors,
    loading,
  };
};

export default useLogin;
