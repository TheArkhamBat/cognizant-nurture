import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeesList({ employees }) {
  const listStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px'
  };

  return (
    <div>
      <h2>Employee List</h2>
      <div style={listStyle}>
        {employees.map(employee => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
}

export default EmployeesList;
