import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import useSignup from '../hooks/auth/useSignup';

const SignupPage = () => {
  const { handleSubmit, handleChange, values, errors, setFieldValue } = useSignup();

  return (
    <div style={{ width: '300px', margin: '100px auto' }}>
      <h2>Sign Up</h2>
      <Form onFinish={handleSubmit}>
        <Form.Item
          validateStatus={errors.email && 'error'}
          help={errors.email}
        >
          <Input 
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.dateOfBirth && 'error'}
          help={errors.dateOfBirth}
        >
          <DatePicker 
            style={{ width: '100%' }}
            name="dateOfBirth"
            placeholder="Date of Birth"
            value={values.dateOfBirth}
            onChange={(date) => setFieldValue('dateOfBirth', date)}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.password && 'error'}
          help={errors.password}
        >
          <Input.Password 
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.confirmPassword && 'error'}
          help={errors.confirmPassword}
        >
          <Input.Password 
            name="confirmPassword"
            placeholder="Confirm Password"
            value={values.confirmPassword}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default SignupPage;
