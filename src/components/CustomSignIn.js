import React, { useState } from 'react';
import { signIn } from 'aws-amplify/auth';
import './CustomSignIn.css'; // Make sure to create and style this CSS file

const CustomSignIn = ({ setAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await signIn({ username, password });
      setAuthenticated(true); // Set authentication state to true
    } catch (err) {
      setError('Incorrect username or password');
      console.error('Error signing in', err);
    }
  };

  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <input
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="sign-in-input"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="sign-in-input"
            required
          />
          {error && <p className="sign-in-error">{error}</p>}
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomSignIn;
