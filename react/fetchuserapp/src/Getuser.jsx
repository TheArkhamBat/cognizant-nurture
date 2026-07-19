import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://api.randomuser.me/')
      .then(response => response.json())
      .then(data => {
        const userData = data.results[0];
        this.setState({
          user: {
            title: userData.name.title,
            firstName: userData.name.first,
            lastName: userData.name.last,
            image: userData.picture.large
          },
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error: error.message,
          loading: false
        });
      });
  }

  render() {
    const { user, loading, error } = this.state;

    if (loading) {
      return <div style={{ padding: '20px', fontFamily: 'Arial' }}>Loading user data...</div>;
    }

    if (error) {
      return <div style={{ padding: '20px', fontFamily: 'Arial', color: 'red' }}>Error: {error}</div>;
    }

    return (
      <div style={{ 
        padding: '20px', 
        fontFamily: 'Arial', 
        maxWidth: '400px', 
        margin: '0 auto',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2>User Details</h2>
        <img 
          src={user.image} 
          alt={`${user.firstName} ${user.lastName}`}
          style={{
            borderRadius: '50%',
            border: '3px solid #007bff',
            marginBottom: '15px'
          }}
        />
        <h3>{user.title}. {user.firstName} {user.lastName}</h3>
        <p style={{ color: '#666' }}>Title: {user.title}</p>
        <p style={{ color: '#666' }}>First Name: {user.firstName}</p>
        <p style={{ color: '#666' }}>Last Name: {user.lastName}</p>
      </div>
    );
  }
}

export default Getuser;
