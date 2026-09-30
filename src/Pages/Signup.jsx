import React, { useState } from 'react';
import { registerAPI } from '../services/allAPI';

function Signup() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSignup = async () => {
    if (!user.name || !user.email || !user.password || !user.confirmPassword) {
      alert('Please fill all fields');
      return;
    }

    if (user.password !== user.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      await registerAPI({
        name: user.name,
        email: user.email,
        password: user.password
      });

      alert('Signup successful!');

      setUser({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.log(error);
      alert('Signup failed');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMHUL5_mxfNnKCxDaCe-9DQocoYhYeKWmmdk6oFMKoULUfCGd4plKgwqd&s=10")' }}>
      <div className="mt-3 bg-white p-5 rounded-4 shadow" style={{ width: '450px', maxWidth: '90%' }}>
        <h2 className="text-center fw-bold mb-2" style={{ color: '#d5a92f' }}>Create Account</h2>
        <p className="text-center text-secondary mb-4">Join SafeTails</p>

        <div className="mb-2">
          <label className="form-label fw-bold">Full Name</label>
          <input type="text" className="form-control py-3" placeholder="Enter your name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
        </div>

        <div className="mb-2">
          <label className="form-label fw-bold">Email</label>
          <input type="email" className="form-control py-3" placeholder="Enter your email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
        </div>

        <div className="mb-2">
          <label className="form-label fw-bold">Password</label>
          <input type="password" className="form-control py-3" placeholder="Create a password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Confirm Password</label>
          <input type="password" className="form-control py-3" placeholder="Confirm your password" value={user.confirmPassword} onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} />
        </div>

        <button onClick={handleSignup} className="btn w-100 text-white rounded-pill py-3" style={{ backgroundColor: '#d5a92f' }}>
          Sign Up
        </button>

        <p className="text-center mt-4 mb-0">
          Already have an account?
          <a href="/Login" className="text-decoration-none fw-bold ms-1" style={{ color: '#d5a92f' }}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;