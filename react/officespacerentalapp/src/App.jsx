import React from 'react';

function App() {
  // Office object with details
  const office = {
    name: 'Tech Hub Office Space',
    rent: 55000,
    address: '123 Business Park, Mumbai'
  };

  // List of office spaces
  const officeSpaces = [
    { id: 1, name: 'Co-working Space', rent: 45000, address: '456 Startup Lane, Bangalore' },
    { id: 2, name: 'Private Cabin', rent: 65000, address: '789 Corporate Tower, Delhi' },
    { id: 3, name: 'Meeting Room', rent: 35000, address: '101 Conference Center, Pune' },
    { id: 4, name: 'Executive Suite', rent: 75000, address: '202 Business Bay, Hyderabad' }
  ];

  // Inline CSS styles
  const headingStyle = {
    color: '#2c3e50',
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial'
  };

  const containerStyle = {
    padding: '20px',
    fontFamily: 'Arial'
  };

  const officeCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    margin: '20px 0',
    backgroundColor: '#f9f9f9'
  };

  const getRentColor = (rent) => {
    return rent < 60000 ? 'red' : 'green';
  };

  return (
    <div>
      <h1 style={headingStyle}>Office Space Rental</h1>
      
      <div style={containerStyle}>
        <h2>Featured Office Space</h2>
        <div style={officeCardStyle}>
          <h3>{office.name}</h3>
          <p><strong>Rent:</strong> <span style={{ color: getRentColor(office.rent) }}>₹{office.rent}</span></p>
          <p><strong>Address:</strong> {office.address}</p>
        </div>

        <h2>Available Office Spaces</h2>
        {officeSpaces.map(space => (
          <div key={space.id} style={officeCardStyle}>
            <h3>{space.name}</h3>
            <p><strong>Rent:</strong> <span style={{ color: getRentColor(space.rent) }}>₹{space.rent}</span></p>
            <p><strong>Address:</strong> {space.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
