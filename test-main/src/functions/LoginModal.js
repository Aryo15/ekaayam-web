import '../css/styles.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from './firebase';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import SignInwithGoogle from './signInWithGoogle';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../functions/firebase';

const LoginModal = ({ show, handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate(); // Add useNavigate for navigation

  if (!show) {
    return null;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully');
      toast.success('Login successful', {
        position: 'top-center',
        autoClose: 2000,
      });
      navigate('/'); // Navigate to the profile page
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: 'bottom-center',
        autoClose: 2000,
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: ""
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
      navigate('/'); // Navigate to the profile page after registration
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="login-modal">
      <div className="login-modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>{isRegistering ? 'Register' : 'Login'}</h2>
        <form onSubmit={isRegistering ? handleRegister : handleLogin}>
          {isRegistering && (
            <>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
            </>
          )}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
          <p className="forgot-password text-right">
            {isRegistering ? (
              <>
                Already registered? <a href="#" onClick={() => setIsRegistering(false)}>Login Here</a>
              </>
            ) : (
              <>
                New user? <a href="#" onClick={() => setIsRegistering(true)}>Register Here</a>
              </>
            )}
          </p>
          <SignInwithGoogle />
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
