import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  // Increment methods
  const increment = () => {
    setCounter(counter + 1);
  };

  const sayHello = () => {
    alert('Hello! Counter value is: ' + counter);
  };

  const incrementAndSayHello = () => {
    increment();
    sayHello();
  };

  // Welcome method with argument
  const sayWelcome = (message) => {
    alert(message + '! Welcome to Event Examples App');
  };

  // Synthetic event handler
  const handleClick = () => {
    alert('I was clicked');
  };

  // Currency Converter
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleConvert = (e) => {
    e.preventDefault();
    const conversionRate = 0.011; // 1 INR = 0.011 EUR (example rate)
    const euroValue = rupees * conversionRate;
    setEuro(euroValue.toFixed(2));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Event Handling Examples</h1>

      {/* Counter Example */}
      <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Counter with Multiple Events</h2>
        <p>Counter Value: <strong>{counter}</strong></p>
        <button 
          onClick={incrementAndSayHello}
          style={{ padding: '10px 20px', margin: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Increment
        </button>
        <button 
          onClick={() => sayWelcome('Welcome')}
          style={{ padding: '10px 20px', margin: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Say Welcome
        </button>
        <button 
          onClick={handleClick}
          style={{ padding: '10px 20px', margin: '10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Click Me
        </button>
      </div>

      {/* Currency Converter */}
      <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Currency Converter - INR to Euro</h2>
        <form onSubmit={handleConvert}>
          <div>
            <label>Amount in INR: </label>
            <input 
              type="number" 
              value={rupees} 
              onChange={(e) => setRupees(e.target.value)}
              placeholder="Enter amount in INR"
              style={{ padding: '8px', margin: '10px', width: '200px' }}
            />
          </div>
          <button 
            type="submit"
            style={{ padding: '10px 20px', margin: '10px', backgroundColor: '#17a2b8', color: 'white', border: 'none', borderRadius: '5px' }}
          >
            Convert to Euro
          </button>
        </form>
        {euro && (
          <p><strong>Amount in Euro: €{euro}</strong></p>
        )}
      </div>
    </div>
  );
}

export default App;
