// VideoListings.js
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
    <div>
      <h2>Video Listings</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <video controls width="320" height="180">
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoListings;
