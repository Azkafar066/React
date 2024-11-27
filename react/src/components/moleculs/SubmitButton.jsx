import React from 'react';
import Button from '../atoms/Button';

const SubmitButton = ({ label, onClick }) => (
  <Button type="submit" label={label} onClick={onClick} className="submit-button" />
);

export default SubmitButton;
