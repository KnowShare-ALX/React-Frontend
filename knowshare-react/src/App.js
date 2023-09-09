import React, { useState } from 'react';
import EarningsHistory from './EarningsHistory'; // Import your EarningsHistory component
import PayoutMethods from './PayoutMethods'; // Import your PayoutMethods component
import logo from './logo.svg';
import './App.css';

function App() {
  // Define data (e.g., sample earnings and payout methods) and functions
  const initialEarnings = [
    { id: 1, amount: 100, date: '2023-08-15' },
    { id: 2, amount: 150, date: '2023-08-20' },
  ];

  const [payoutMethods, setPayoutMethods] = useState([
    { method: 'PayPal', email: 'user@example.com' },
  ]);

  const addPayoutMethod = (newMethod) => {
    // Update the payout methods state with the new method
    setPayoutMethods([...payoutMethods, newMethod]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Add your EarningsHistory component here */}
        <EarningsHistory earnings={initialEarnings} />

        {/* Add your PayoutMethods component here */}
        <PayoutMethods payoutMethods={payoutMethods} onPayoutMethodAdd={addPayoutMethod} />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
