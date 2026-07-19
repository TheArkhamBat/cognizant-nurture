function GuestPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Guest Page</h2>
      <p>Welcome to our flight booking website!</p>
      <p>Please login to book tickets.</p>
      <div style={{ margin: '20px 0' }}>
        <h3>Available Flights</h3>
        <ul>
          <li>Flight 101 - Mumbai to Delhi - ₹5,000</li>
          <li>Flight 202 - Delhi to Bangalore - ₹6,500</li>
          <li>Flight 303 - Bangalore to Hyderabad - ₹4,500</li>
        </ul>
      </div>
    </div>
  );
}

export default GuestPage;
