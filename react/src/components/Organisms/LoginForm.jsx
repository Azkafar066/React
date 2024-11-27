import React from 'react';
import FormGroup from '../moleculs/FormGroup';
import SubmitButton from '../moleculs/SubmitButton';

const LoginForm = ({ onSubmit, onChange, formData }) => (
  <form onSubmit={onSubmit} className="login-form">
    <FormGroup
      label="Email"
      type="email"
      placeholder="Enter your email"
      value={formData.email}
      onChange={onChange}
      name="email"
    />
    <FormGroup
      label="Password"
      type="password"
      placeholder="Enter your password"
      value={formData.password}
      onChange={onChange}
      name="password"
    />
    <SubmitButton label="Login" />
  </form>
);

export default LoginForm;
