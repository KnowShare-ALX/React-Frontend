import React from 'react';

function AuthTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex justify-center mb-8">
      <button
        className={`px-6 py-3 rounded-t-lg ${
          activeTab === 'login' ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
        }`}
        onClick={() => setActiveTab('login')}
      >
        Login
      </button>
      <button
        className={`px-6 py-3 rounded-t-lg ${
          activeTab === 'signup' ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
        }`}
        onClick={() => setActiveTab('signup')}
      >
        Sign Up
      </button>
    </div>
  );
}

export default AuthTabs;
