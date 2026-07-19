import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import EmployeesList from './EmployeesList';

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const employees = [
    { id: 1, name: 'John Smith', position: 'Software Engineer', department: 'IT' },
    { id: 2, name: 'Jane Doe', position: 'Project Manager', department: 'PMO' },
    { id: 3, name: 'Bob Johnson', position: 'UX Designer', department: 'Design' },
    { id: 4, name: 'Alice Williams', position: 'Data Analyst', department: 'Analytics' }
  ];

  const appStyle = {
    backgroundColor: theme === 'light' ? '#f5f5f5' : '#1a1a1a',
    color: theme === 'light' ? '#000000' : '#ffffff',
    minHeight: '100vh',
    padding: '20px',
    fontFamily: 'Arial'
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: theme === 'light' ? '#007bff' : '#ffc107',
    color: theme === 'light' ? '#ffffff' : '#000000',
    cursor: 'pointer',
    fontSize: '16px'
  };

  return (
    <div style={appStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Employee Management System</h1>
        <button onClick={toggleTheme} style={buttonStyle}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>
      <EmployeesList employees={employees} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
