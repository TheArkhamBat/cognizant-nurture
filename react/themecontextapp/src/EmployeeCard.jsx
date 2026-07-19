import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function EmployeeCard({ employee }) {
  const { theme } = useContext(ThemeContext);

  const cardStyle = {
    padding: '20px',
    margin: '10px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#000000' : '#ffffff'
  };

  const buttonStyle = {
    padding: '8px 16px',
    margin: '5px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: theme === 'light' ? '#007bff' : '#ffc107',
    color: theme === 'light' ? '#ffffff' : '#000000',
    cursor: 'pointer'
  };

  return (
    <div style={cardStyle}>
      <h3>{employee.name}</h3>
      <p>Position: {employee.position}</p>
      <p>Department: {employee.department}</p>
      <button style={buttonStyle}>View Details</button>
      <button style={buttonStyle}>Edit</button>
    </div>
  );
}

export default EmployeeCard;
