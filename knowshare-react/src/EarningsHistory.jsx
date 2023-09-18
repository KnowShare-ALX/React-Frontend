import React from 'react';

function EarningsHistory({ earnings }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Earnings History</h2>
      <ul>
        {earnings.map((earning) => (
          <li key={earning.id} className="mb-2">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-semibold">Amount:</span> ${earning.amount} 
              </div>
              <div>
                <span className="font-semibold">Date:</span> {earning.date}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EarningsHistory;
