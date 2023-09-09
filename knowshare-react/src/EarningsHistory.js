import React from 'react';

function EarningsHistory({ earnings }) {
  return (
    <div>
      <h2>Earnings History</h2>
      <ul>
        {earnings.map((earning) => (
          <li key={earning.id}>
            Amount: ${earning.amount} - Date: {earning.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EarningsHistory;
