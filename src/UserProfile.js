import React from 'react';
import ashwithaImage from './ashwitha.jpg'; // Adjust the path based on your directory structure

function UserProfile({ user }) {
  const profileStyles = {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
    fontFamily: 'Times New Roman, Times, serif', // Set font style here
  };

  const avatarStyles = {
    width: '200px',
    height: '250px',
    borderRadius: '70%',
    marginBottom: '20px',
  };

  const nameStyles = {
    fontSize: '30px',
    marginBottom: '10px',
    fontFamily: 'Times New Roman, Times, serif', // Set font style here
  };

  const textStyles = {
    fontSize: '18px',
    margin: '5px 0',
    fontFamily: 'Times New Roman, Times, serif', // Set font style here
  };

  return (
    <div style={profileStyles}>
      <img src={ashwithaImage} alt="User Avatar" style={avatarStyles} />
      <h1 style={nameStyles}>{user.name}</h1>
      <p style={textStyles}><strong>Email:</strong> {user.email}</p>
      <p style={textStyles}><strong>Location:</strong> {user.location}</p>
      <p style={textStyles}><strong>Bio:</strong> {user.bio}</p>
    </div>
  );
}

export default UserProfile;
