import React, { useState } from 'react';

function PayoutMethods({ payoutMethods, onPayoutMethodAdd }) {
  const [method, setMethod] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new payout method object
    const newMethod = {
      method,
      email,
    };

    // Pass the new method to the parent component
    onPayoutMethodAdd(newMethod);

    // Clear the form fields
    setMethod('');
    setEmail('');
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Payout Methods</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="method" className="block text-sm font-medium text-gray-700">
            Payout Method
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
            id="method"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          Save Payout Method
        </button>
      </form>
    </div>
  );
}

export default PayoutMethods;
