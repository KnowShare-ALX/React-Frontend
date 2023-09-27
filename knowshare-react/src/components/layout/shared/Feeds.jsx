import React, { useState } from "react";

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

const Feeds = () => {
  const [feeds, setFeeds] = useState(dummyFeedsData);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Feeds</h2>
      <div className="space-y-4">
        {feeds.map((feed) => (
          <div key={feed.id} className="bg-white p-4 rounded-lg shadow">
            <div className="text-gray-500 mb-2">@{feed.username}</div>
            <p>{feed.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feeds;
