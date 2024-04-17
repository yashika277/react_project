import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Medi from '../../Img/Medi.jpg'
import Logo from '../../Img/Logo.webp'
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const ForgotPass = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleChangePassword = (e) => {
      e.preventDefault();
  
      if (newPassword !== confirmPassword) {
        setError('New passwords do not match');
        return;
      }
  
      let storedSignupData = JSON.parse(localStorage.getItem('signupData')) || [];
  
      const userIndex = storedSignupData.findIndex(data => data.email === email);
  
      if (userIndex === -1) {
        setError('Email not found');
        return;
      }
  
      storedSignupData[userIndex].password = newPassword;
      localStorage.setItem('signupData', JSON.stringify(storedSignupData));
  
      setEmail('');
      setNewPassword('');
      setConfirmPassword('');
      setError('Password changed successfully');
    };


  return (
    <div className="login-main ">
      <div className="login-left">
        <img src={Medi} alt="Oswald Team" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="Company Logo" />
          </div>
          <div className="login-center">
            <h2>Forgot Password?</h2>
            <p>Change your password</p>
            <form onSubmit={handleChangePassword}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <div className="login-center-buttons">
                <button type='button' onClick={handleChangePassword}>
                  Change Password
                </button>
              </div>
            </form>
          </div>
          <p className="login-bottom-p">
            Remembered your password? <Link to="/">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForgotPass
