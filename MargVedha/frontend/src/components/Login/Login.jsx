// Login.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; // Adjust path based on location
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate('/dashboard'); // or wherever your main page is
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setError("User not found.");
      } else if (error.code === 'auth/wrong-password') {
        setError("Wrong password.");
      } else {
        setError("Login failed.");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome Back 🚀</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <label>Email</label>
        <input name="email" type="email" required onChange={handleChange} />
        <label>Password</label>
        <input name="password" type="password" required onChange={handleChange} />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
