import React from 'react';
import UserProfile from './UserProfile';

function App() {
  // Sample user data
  const user = {
    name: 'ASHWITHA',
    email: 'ashwithas.22it@kongu.edu',
    location: 'Karur, TamilNadu',
    bio: 'Web developer with a passion for creating beautiful and functional websites.',
    avatar: 'https://via.placeholder.com/150', // Placeholder image URL
  };

  // Inline styles for the App component's container
  const appStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  };

  return (
    <div style={appStyles}>
      <UserProfile user={user} />
    </div>
  );
}

export default App;
