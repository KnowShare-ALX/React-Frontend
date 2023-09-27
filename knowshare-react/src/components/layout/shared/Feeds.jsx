import React, { useState } from "react";
import PropTypes from "prop-types";

const dummyFeedsData = [
  {
    id: 1,
    username: "user1",
    content: "This is the first post.",
  },
  {
    id: 2,
    username: "user2",
    content: "Hello from user 2!",
  },
  // Add more dummy posts
];

const Feed = ({ id, username, content }) => (
  <div key={id} className="bg-white p-4 rounded-lg shadow-md">
    <div className="text-gray-500 mb-2">@{username}</div>
    <p className="text-gray-800">{content}</p>
  </div>
);

Feed.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const Feeds = () => {
  const [feeds, setFeeds] = useState(dummyFeedsData);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Feeds</h2>
      <div className="space-y-4">
        {feeds.map((feed) => (
          <Feed key={feed.id} {...feed} />
        ))}
      </div>
    </div>
  );
};

export default Feeds;
