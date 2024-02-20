import React, { useState } from "react";
import './Login.css'; // Import your CSS file for styling
import { FaEnvelope, FaLock } from "react-icons/fa"; // Import icons from react-icons library

function Login() {
  // State variables to store user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit user data (e.g., to a backend server)
    console.log("Form submitted:", { email, password });
    // Reset form fields
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email"><FaEnvelope /> Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"><FaLock /> Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
