// Signup.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/firebase'; // Make sure this path is accurate
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    dob: '',
    gender: '',
    agree: false,
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle form changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle signup submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.agree) {
      setError("You must accept the terms & privacy policy.");
      return;
    }

    try {
      // Step 1: Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Step 2: Store user profile in Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        dob: formData.dob,
        gender: formData.gender,
        createdAt: serverTimestamp(),
      });

      alert("Account created successfully ✅");
      navigate("/login");

    } catch (err) {
      console.error("Signup Error: ", err.message);
      if (err.code === 'auth/email-already-in-use') {
        setError("This email is already in use.");
      } else if (err.code === 'auth/weak-password') {
        setError("Password should be at least 6 characters.");
      } else {
        setError("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Create Your RasaSetu Account 🧠</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        {error && <div className="error-message">{error}</div>}

        {/* First Name & Last Name */}
        <div className="name-fields">
          <div>
            <label>First Name</label>
            <input name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div>
            <label>Last Name</label>
            <input name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>

        {/* Email */}
        <label>Email</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} required />

        {/* Password */}
        <label>Password</label>
        <input name="password" type="password" value={formData.password} onChange={handleChange} required />

        <label>Confirm Password</label>
        <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} required />

        {/* Phone Number */}
        <label>Phone Number</label>
        <input name="phone" type="tel" value={formData.phone} onChange={handleChange} required />

        {/* Date of Birth */}
        <label>Date of Birth</label>
        <input name="dob" type="date" value={formData.dob} onChange={handleChange} required />

        {/* Gender */}
        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">-- Select Gender --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="nonbinary">Non-binary</option>
          <option value="preferNotToSay">Prefer not to say</option>
        </select>

        {/* Terms Agreement */}
        <div className="checkbox-container">
          <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} required />
          <label>I agree to the <Link to="/privacy">Privacy Policy</Link> and <Link to="/terms">Terms</Link></label>
        </div>

        <button type="submit">Sign Up</button>
        <p>Already have an account? <Link to="/login">Log in</Link></p>
      </form>
    </div>
  );
};

export default Signup;
