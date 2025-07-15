import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../css/styles.css';
import LoginModal from './LoginModal';
import { auth, db } from "../functions/firebase";
import { doc, getDoc } from "firebase/firestore";

const Navbar = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [activeLink, setActiveLink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // State for controlling the menu
  const [showLoginModal, setShowLoginModal] = useState(false); // State for controlling the login modal
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false); // State for profile dropdown
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      try {
        if (user) {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
            console.log(docSnap.data());
            setShowLoginModal(false);
          } else {
            console.log("User data does not exist in the database");
          }
        } else {
          setUserDetails(null); // No user is logged in
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname); // Set the active link based on the current URL path
  }, [location]);

  async function handleLogout() {
    try {
      await auth.signOut();
      navigate("/");
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  // Toggle the menu when the toggle button is clicked
  const handleToggleClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when the close button is clicked or a link is clicked
  const handleCloseClick = () => {
    setMenuOpen(false);
  };

  // Show the login modal
  const handleLoginClick = () => {
    setShowLoginModal(true);
    setMenuOpen(false); // Close the menu when showing login modal
  };

  // Close the login modal
  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  // Toggle the profile dropdown
  const handleProfileClick = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
    setMenuOpen(false); // Close the menu when showing profile dropdown
  };

  return (
    <>
      <header className="header" id="header">
        <nav>
          <a href="/" className="nav__logo">
            <img src={require('../assests/img/ekaayam_new.png')} alt="company logo" className="company__logo" />
          </a>
          <div className={`nav__menu ${menuOpen ? 'show-menu' : ''}`} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link
                  to="/"
                  className={`nav__link ${activeLink === '/' ? 'active-link' : ''}`}
                  onClick={handleCloseClick} // Close the menu when a link is clicked
                >
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/events"
                  className={`nav__link ${activeLink === '/events' ? 'active-link' : ''}`}
                  onClick={handleCloseClick} // Close the menu when a link is clicked
                >
                  Events
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/booksmart"
                  className={`nav__link ${activeLink === '/booksmart' ? 'active-link' : ''}`}
                  onClick={handleCloseClick} // Close the menu when a link is clicked
                >
                  BookSmart
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/courses"
                  className={`nav__link ${activeLink === '/courses' ? 'active-link' : ''}`}
                  onClick={handleCloseClick} // Close the menu when a link is clicked
                >
                  Courses
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/mentorships"
                  className={`nav__link ${activeLink === '/mentorships' ? 'active-link' : ''}`}
                  onClick={handleCloseClick} // Close the menu when a link is clicked
                >
                  Mentorships
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/about"
                  className={`nav__link ${activeLink === '/about' ? 'active-link' : ''}`}
                  onClick={handleCloseClick} // Close the menu when a link is clicked
                >
                  About
                </Link>
              </li>
              <li className="nav__item"></li>
              <li className="nav__item">
                <Link
                  to="/host"
                  className={`button host ${activeLink === '/host' ? 'active-link' : ''}`}
                  onClick={handleCloseClick} // Close the menu when a link is clicked
                >
                  <i className="ri-add-line"></i>Host
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/bizboost"
                  className={`button bizBoost ${activeLink === '/bizboost' ? 'active-link' : ''}`}
                  onClick={handleCloseClick} // Close the menu when a link is clicked
                >
                  <i className="ri-briefcase-line"></i>BizBoost
                </Link>
              </li>
              <li className="nav__item"></li>
              {userDetails ? (
                <li className="nav__item">
                  <div
                    className={`nav__link profile-dropdown ${profileDropdownOpen ? 'dropdown-open' : ''}`}
                    onClick={handleProfileClick}
                  >
                    <img
                      src={userDetails.photo || 'default-profile-pic.png'}
                      alt="User Profile"
                      className="profile-image"
                      width="46"
                    />
                    {profileDropdownOpen && (
                      <div className="profile-dropdown-menu">
                        <Link to="/profile" onClick={handleCloseClick}>Profile</Link>
                        <Link to="/tickets" onClick={handleCloseClick}>My Tickets</Link>
                        <Link to="/" onClick={handleLogout}>Logout</Link>
                      </div>
                    )}
                  </div>
                </li>
              ) : (
                <li className="nav__item">
                  <Link
                    className={`nav__link ${activeLink === '/login' ? 'active-link' : ''}`}
                    onClick={handleLoginClick}
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
            <div className="nav__close" id="nav-close" onClick={handleCloseClick}>
              <i className="ri-close-line"></i>
            </div>
          </div>
          <div className="nav__toggle" id="nav-toggle" onClick={handleToggleClick}>
            <i className="ri-menu-fill"></i>
          </div>
        </nav>
      </header>

      {/* Render the login modal */}
      <LoginModal show={showLoginModal} handleClose={handleCloseModal} />
    </>
  );
};

export default Navbar;
