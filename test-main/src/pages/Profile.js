import React, { useEffect, useState } from "react";
import { auth, db } from "../functions/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState('default-profile-pic.png');
  const [imageLoading, setImageLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            console.log("User data fetched:", data);
            setUserDetails(data);
            setImageSrc(data.photo || 'default-profile-pic.png');
          } else {
            console.log("User data does not exist in the database");
          }
        } catch (error) {
          console.error("Error fetching user data:", error.message);
        }
      } else {
        console.log("User is not logged in");
        navigate("/");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleImageError = () => {
    console.error('Image failed to load. Switching to default image.');
    setImageSrc('default-profile-pic.png');
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  async function handleLogout() {
    try {
      await auth.signOut();
      navigate("/");
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="body-profile">
      {userDetails ? (
        <div className="profile-box"> {/* Add this div for the box styling */}
          <div className="profile__img" style={{ display: "flex", justifyContent: "center" }}>
            {imageLoading && <div className="image-placeholder">Loading...</div>}
            <img
              className="popular__img"
              src={imageSrc}
              style={{ borderRadius: "50%" }}
              alt="User Profile"
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
          </div>
          <h3 className="popular__title">Welcome {userDetails.firstName} 🙏🙏</h3>
          <div>
            <p className="profile__text">Email: {userDetails.email}</p>
            <p className="profile__text">Name: {userDetails.firstName}</p>
          </div>
          <button className="button host" onClick={handleLogout}>
            Logout
          </button>
        </div> // Closing the profile-box div here
      ) : (
        <p>No user data available.</p>
      )}
  
      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>
    </div>
  );  
}

export default Profile;
