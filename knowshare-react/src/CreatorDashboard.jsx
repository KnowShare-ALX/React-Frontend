import React from 'react';
import 'tailwindcss/tailwind.css';

function CreatorDashboard() {
  // Placeholder data (replace with actual data)
  const earnings = 5000;
  const videoCount = 10;

  return (
    <div className="p-4">
      <h2 className="text-3xl font-semibold mb-8">Creator Dashboard</h2>
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Video Upload</h3>
        <form className="flex space-x-2">
          <input
            type="file"
            accept="video/*"
            className="border p-2 flex-grow rounded-l"
            placeholder="Choose a video..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          >
            Upload Video
          </button>
        </form>
      </section>
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Earnings Tracking</h3>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <p className="text-lg font-semibold mb-2">Total Earnings</p>
          <p className="text-2xl text-green-500">${earnings}</p>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold mb-2">Number of Videos</p>
          <p className="text-2xl text-blue-500">{videoCount}</p>
        </div>
      </section>
      <section>
        <h3 className="text-xl font-semibold mb-4">Content Management</h3>
        <ul className="list-disc pl-6">
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:underline">
              Video 1 Title
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:underline">
              Video 2 Title
            </a>
          </li>
          {/* Add more video listings */}
        </ul>
      </section>
    </div>
  );
}

export default CreatorDashboard;
