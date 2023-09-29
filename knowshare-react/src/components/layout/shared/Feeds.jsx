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
    <div className="container p-4">
      <h2 className="display-4 font-weight-bold mb-4">Feeds</h2>
      <div className="list-group">
        {feeds.map((feed) => (
          <div key={feed.id} className="list-group-item list-group-item-action mb-2">
            <div className="text-muted mb-2">@{feed.username}</div>
            <p className="mb-0">{feed.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feeds;
