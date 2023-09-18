import React, { useState, useEffect } from 'react';

function VideoListings() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Simulated video data (replace with actual API call)
    const fakeVideoData = [
      {
        id: 1,
        title: 'Video 1',
        description: 'This is the first video',
        url: 'https://example.com/video1.mp4',
      },
      {
        id: 2,
        title: 'Video 2',
        description: 'This is the second video',
        url: 'https://example.com/video2.mp4',
      },
    ];

    setVideos(fakeVideoData);
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Video Listings</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.id} className="mb-4">
            <h3 className="text-lg font-semibold">{video.title}</h3>
            <p className="text-gray-600">{video.description}</p>
            <div className="relative aspect-w-16 aspect-h-9">
              <video className="rounded-lg" controls width="100%" height="100%">
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoListings;
