import React from "react";

const videos = [
  {
    id: 1,
    title: "Video 1",
    thumbnail: "https://via.placeholder.com/150",
    description: "This is the first video in the library.",
  },
  {
    id: 2,
    title: "Video 2",
    thumbnail: "https://via.placeholder.com/150",
    description: "This is the second video in the library.",
  },
  {
    id: 3,
    title: "Video 3",
    thumbnail: "https://via.placeholder.com/150",
    description: "This is the third video in the library.",
  },
  // Add more dummy data as needed
];

const VideoLibrary = ({ title }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 ease-in-out"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="mb-2 rounded-lg"
            />
            <h3 className="text-lg font-semibold">{video.title}</h3>
            <p className="text-gray-600">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoLibrary;
