import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const validate = () => {
    let valid = true;
    let newErrors = { name: '', email: '', password: '' };

    // Name validation - at least 5 characters
    if (formData.name.length < 5) {
      newErrors.name = 'Name must have at least 5 characters';
      valid = false;
    }

    // Email validation - should have @ and .
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = 'Email must contain @ and .';
      valid = false;
    }

    // Password validation - at least 8 characters
    if (formData.password.length < 8) {
      newErrors.password = 'Password must have at least 8 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Registration Successful!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPassword: ${'*'.repeat(formData.password.length)}`);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit} style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name:</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name (min 5 characters)"
            style={{ 
              width: '100%', 
              padding: '10px', 
              borderRadius: '5px', 
              border: errors.name ? '2px solid red' : '1px solid #ccc',
              boxSizing: 'border-box'
            }}
          />
          {errors.name && <p style={{ color: 'red', margin: '5px 0', fontSize: '14px' }}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email (must contain @ and .)"
            style={{ 
              width: '100%', 
              padding: '10px', 
              borderRadius: '5px', 
              border: errors.email ? '2px solid red' : '1px solid #ccc',
              boxSizing: 'border-box'
            }}
          />
          {errors.email && <p style={{ color: 'red', margin: '5px 0', fontSize: '14px' }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password:</label>
          <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password (min 8 characters)"
            style={{ 
              width: '100%', 
              padding: '10px', 
              borderRadius: '5px', 
              border: errors.password ? '2px solid red' : '1px solid #ccc',
              boxSizing: 'border-box'
            }}
          />
          {errors.password && <p style={{ color: 'red', margin: '5px 0', fontSize: '14px' }}>{errors.password}</p>}
        </div>

        <button 
          type="submit"
          style={{ 
            padding: '12px 30px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            width: '100%'
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
