import React, { useState } from 'react';
import AuthTemplate from '../components/Templates/AuthTemplate';
import LoginForm from '../components/Organisms/LoginForm';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
  };

  return (
    <AuthTemplate title="Login">
      <LoginForm onSubmit={handleSubmit} onChange={handleChange} formData={formData} />
    </AuthTemplate>
  );
};

export default LoginPage;

  
