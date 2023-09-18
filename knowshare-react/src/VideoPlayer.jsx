import React from 'react';

function VideoPlayer({ videoUrl }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Video Player</h2>
      <div className="relative aspect-w-16 aspect-h-9">
        <video className="rounded-lg" controls width="100%" height="100%">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoPlayer;
