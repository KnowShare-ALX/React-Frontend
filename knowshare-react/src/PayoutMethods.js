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
    <div>
      <h2>Payout Methods</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="method" className="form-label">Payout Method</label>
          <input
            type="text"
            className="form-control"
            id="method"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Save Payout Method</button>
      </form>
    </div>
  );
}

export default PayoutMethods;
