function UserPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>User Page</h2>
      <p>Welcome back! You are logged in.</p>
      <div style={{ margin: '20px 0' }}>
        <h3>Book Your Flight</h3>
        <form>
          <div>
            <label>From: </label>
            <select style={{ margin: '10px', padding: '8px' }}>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
            </select>
          </div>
          <div>
            <label>To: </label>
            <select style={{ margin: '10px', padding: '8px' }}>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
            </select>
          </div>
          <div>
            <label>Date: </label>
            <input type="date" style={{ margin: '10px', padding: '8px' }} />
          </div>
          <button 
            type="submit"
            style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}
          >
            Book Ticket
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserPage;
