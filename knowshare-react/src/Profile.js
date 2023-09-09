// Profile.js
import React from 'react';

function Profile({ user }) {
  return (
    <div>
      <h2>Profile</h2>
      <img src={user.avatar} alt={user.username} />
      <h3>{user.username}</h3>
      <p>{user.bio}</p>
      <button>Edit Profile</button> {/* Add functionality to edit profile */}
    </div>
  );
}

export default Profile;
