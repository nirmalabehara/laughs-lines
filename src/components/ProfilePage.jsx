import React, { useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const user = auth.currentUser; // Get the current logged-in user
  const [favorites, setFavorites] = useState([]);
  const [displayName, setDisplayName] = useState(user?.displayName || 'Anonymous');
  const [profilePic, setProfilePic] = useState(user?.photoURL || '/default-profile.png');
  const [isEditing, setIsEditing] = useState(false);

  // Load favorites from local storage when the component mounts
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem(`favorites_${user?.uid}`)) || [];
    setFavorites(storedFavorites);
  }, [user]);

  // Function to remove a favorite pickup line
  const removeFavorite = (line) => {
    const updatedFavorites = favorites.filter(fav => fav !== line);
    setFavorites(updatedFavorites);
    localStorage.setItem(`favorites_${user?.uid}`, JSON.stringify(updatedFavorites));
  };

  // Handle file upload for profile picture
  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Save changes to localStorage
  const saveChanges = () => {
    localStorage.setItem(`profile_${user?.uid}`, JSON.stringify({ displayName, profilePic }));
    setIsEditing(false);
  };

  // Load saved profile data on mount
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem(`profile_${user?.uid}`));
    if (savedProfile) {
      setDisplayName(savedProfile.displayName);
      setProfilePic(savedProfile.profilePic);
    }
  }, [user]);

  if (!user) {
    return <div>Please log in first.</div>;
  }

  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      
      <div className="profile-info">
        <img src={profilePic} alt="User Profile" className="profile-pic" />
        
        {isEditing ? (
          <input type="file" accept="image/*" onChange={handleProfilePicChange} />
        ) : null}

        <h2>
          {isEditing ? (
            <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
          ) : (
            displayName
          )}
        </h2>
        
        <p>Email: {user.email}</p>

        {isEditing ? (
          <button onClick={saveChanges} className="save-btn">Save Changes</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="edit-btn">Edit Profile</button>
        )}
      </div>

      {/* Favorite Pickup Lines Section */}
      <div className="favorites-section">
        <h2>Favorite Pickup Lines</h2>
        {favorites.length === 0 ? (
          <p>No favorites yet. Add some from the pickup lines page!</p>
        ) : (
          <ul>
            {favorites.map((line, index) => (
              <li key={index}>
                {line}
                <button onClick={() => removeFavorite(line)} className="remove-btn">Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
