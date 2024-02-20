import React, { useState } from "react";
import { FaUser } from 'react-icons/fa'; // Importing the user icon from react-icons/fa
import './SignUp.css'; // Import your CSS file for styling

function SignUp() {
  // State variables to store user input
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit user data (e.g., to a backend server)
    console.log("Form submitted:", { username, email, password });
    // Reset form fields
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="signup-container">
      <h2><FaUser /> Sign Up</h2> {/* Adding the user icon before the title */}
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
