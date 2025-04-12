import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Optional external CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Replace with real authentication logic
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="login-container">
      <h2>Welcome Back to RasaSetu 🌈</h2>
      <form onSubmit={handleLogin} className="login-form">
        <label>Email</label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required 
          placeholder="you@example.com"
        />
        
        <label>Password</label>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required 
          placeholder="••••••••"
        />

        <button type="submit">Log In</button>

        <p className="signup-link">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
