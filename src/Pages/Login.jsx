import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginAPI, adminLoginAPI } from '../services/allAPI';

function Login() {
  const [user, setUser] = useState({ email: '', password: '' });
  const [loginType, setLoginType] = useState("user");

  const handleLogin = async () => {
    if (!user.email || !user.password) {
      alert('Please fill all fields');
      return;
    }
    try {
      if (loginType === "user") {
        const result = await loginAPI(user.email, user.password);
        if (result.data.length > 0) {
          const loggedUser = result.data[0];
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("user", JSON.stringify(loggedUser));
          const redirectPath = localStorage.getItem("redirectPath");
          localStorage.removeItem("redirectPath");
          alert('Login successful!');
          window.location.href = redirectPath || "/";
        } else {
          alert('Invalid email or password');
        }
      } else {
        const result = await adminLoginAPI(user.email, user.password);
        if (result.data.length > 0) {
          localStorage.setItem("isAdminLoggedIn", "true");
          alert('Admin login successful!');
          window.location.href = "/AdminDashboard";
        } else {
          alert('Invalid email or password');
        }
      }
    } catch (error) {
      console.log(error);
      alert('Login failed');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundImage: 'url("https://t4.ftcdn.net/jpg/21/50/48/07/360_F_2150480760_eaD5GPRzz2JOg7HNjKmP935rK33GvK69.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="bg-white p-5 rounded-4 shadow" style={{ width: '400px', maxWidth: '90%' }}>
        <h2 className="text-center fw-bold mb-2" style={{ color: '#d5a92f' }}>Welcome Back</h2>
        <p className="text-center text-secondary mb-4">Login to SafeTails</p>
        <div className="d-flex gap-2 mb-4">
          <button type="button" className={`btn w-50 ${loginType === "user" ? "btn-dark" : "btn-outline-dark"}`} onClick={() => setLoginType("user")}>User</button>
          <button type="button" className={`btn w-50 ${loginType === "admin" ? "btn-dark" : "btn-outline-dark"}`} onClick={() => setLoginType("admin")}>Admin</button>
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input type="email" className="form-control py-3" placeholder="Enter your email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Password</label>
          <input type="password" className="form-control py-3" placeholder="Enter your password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
        </div>
        <div className="d-flex justify-content-between mb-4">
          <div>
            <input type="checkbox" className="form-check-input me-2" />
            <label>Remember me</label>
          </div>
          <a href="#" className="text-decoration-none" style={{ color: '#d5a92f' }}>Forgot Password?</a>
        </div>
        <button onClick={handleLogin} className="btn w-100 text-white rounded-pill py-3" style={{ backgroundColor: '#d5a92f' }}>
          {loginType === "user" ? "Login" : "Admin Login"}
        </button>
        {loginType === "user" && (
          <p className="text-center mt-4 mb-0">
            Don't have an account?
            <Link to='/Signup' className="text-decoration-none fw-bold ms-1" style={{ color: '#d5a92f' }}>Sign Up</Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;