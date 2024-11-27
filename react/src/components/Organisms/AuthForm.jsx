const AuthForm = ({ isLogin, formData, setFormData, onSubmit }) => {
    const handleInputChange = (field) => (value) => {
      setFormData({ ...formData, [field]: value });
    };
  
    return (
      <form onSubmit={(e) => onSubmit(e)} className="auth-form">
        {!isLogin && (
          <FormGroup
            label="Username"
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={handleInputChange('username')}
          />
        )}
        <FormGroup
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleInputChange('email')}
        />
        <FormGroup
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleInputChange('password')}
        />
        <Button type="submit">{isLogin ? 'Login' : 'Register'}</Button>
      </form>
    );
  };
  
  export default AuthForm;
  
 