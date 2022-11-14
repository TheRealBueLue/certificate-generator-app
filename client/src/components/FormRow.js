import React from 'react';
import './formRow.css';

const FormRow = ({ type, name, value, handleChange }) => {
  return (
    <div className='form'>
      {/* <label htmlFor={name} className='form-label'>
        {name}
      </label> */}
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className='input'
        // placeholder={name}
      />
    </div>
  );
};

export default FormRow;
