import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from './firebase'; // Ensure firebase is properly initialized
import { toast, ToastContainer } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; // For navigation
import googleLogo from '../assests/img/google.png';
import 'react-toastify/dist/ReactToastify.css';

function SignInwithGoogle() {
  const navigate = useNavigate(); // Initialize useNavigate

  async function googleLogin() {
    console.log("Google login triggered"); // Check if the function is called
    const provider = new GoogleAuthProvider();
    
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Google sign-in result:', result); // Log the result to debug

      const user = result.user;
      if (user) {
        console.log('User details:', {
          email: user.email,
          displayName: user.displayName,
          photo: user.photoURL,
        });

        // Save the user data to Firestore
        try {
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email || "",
            firstName: user.displayName || "",
            photo: user.photoURL || "",
            lastName: ""
          });
          console.log("User data saved to Firestore");
        } catch (error) {
          console.error("Error writing document to Firestore:", error);
        }        

        toast.success("User logged in successfully", {
          position: "top-center",
        });
        console.log("Toast displayed"); // Log toast

        // Ensure the navigation is working correctly
        navigate("/");
        console.log("Navigating to profile"); // Log navigation
      } else {
        console.log("No user data received");
      }
    } catch (error) {
      console.error('Error during Google login:', error);
      toast.error(`Login failed: ${error.message}`, {
        position: "top-center",
      });
    }
  }

  return (
    <div>
      <p className="continue-p">--Or continue with--</p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
      >
        <img src={googleLogo} alt="Google logo" width={"60%"} />
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignInwithGoogle;
