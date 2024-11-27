const FormGroup = ({ label, type, name, placeholder, onChange }) => {
    return (
      <div className="form-group">
        <Label htmlFor={name}>{label}</Label>
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    );
  };
  
  export default FormGroup;
  
