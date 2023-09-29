import React, { useState } from "react";
import { FaHeart } from "react-icons/fa"; // Import heart icon from react-icons library

const FeedItem = ({ title, content }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
      <h5 className="text-xl font-semibold mb-2">{title}</h5>
      <p className="text-gray-700">{content}</p>
      <button
        className={`mt-2 px-4 py-2 rounded-lg ${
          isLiked ? "bg-red-500 text-white" : "bg-gray-300"
        }`}
        onClick={handleLikeClick}
      >
        <FaHeart className="inline-block mr-2" />
        {isLiked ? "Liked" : "Like"}
      </button>
    </div>
  );
};

export default FeedItem;
