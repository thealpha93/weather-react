import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/auth/useLogin';

const LoginPage = () => {
  const { handleSubmit, handleChange, values, errors } = useLogin();

  return (
    <div style={{ width: '300px', margin: '100px auto' }}>
      <h2>Login</h2>
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
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
};

export default LoginPage;
