import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!formData.agree) {
      alert("You must agree to the Terms and Privacy Policy.");
      return;
    }

    // TODO: Handle signup (e.g., Firebase, API)
    console.log("Signup Data:", formData);
  };

  return (
    <div className="signup-container">
      <h2>Create Your RasaSetu Account 🧠</h2>
      <form onSubmit={handleSubmit} className="signup-form">

        <div className="name-fields">
          <div>
            <label>First Name</label>
            <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} />
          </div>
        </div>

        <label>Email Address</label>
        <input type="email" name="email" required value={formData.email} onChange={handleChange} />

        <label>Password</label>
        <input type="password" name="password" required value={formData.password} onChange={handleChange} />

        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" required value={formData.confirmPassword} onChange={handleChange} />

        <label>Phone Number</label>
        <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} />

        <label>Date of Birth</label>
        <input type="date" name="dob" required value={formData.dob} onChange={handleChange} />

        <label>Gender</label>
        <select name="gender" required value={formData.gender} onChange={handleChange}>
          <option value="">-- Select Gender --</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="nonbinary">Non-binary</option>
          <option value="preferNotToSay">Prefer not to say</option>
        </select>

        <div className="checkbox-container">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          <label>
            I agree to the <Link to="/privacy">Privacy Policy</Link> and <Link to="/terms">Terms & Conditions</Link>
          </label>
        </div>

        <button type="submit">Sign Up</button>

        <p className="login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
