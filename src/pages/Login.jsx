// src/pages/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'student'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-page">
      <div className="login-glass">
        <div className="login-header">
          <Link to="/" className="logo">
            <div className="logo-icon">⚡</div>
            <span>SmartCampus</span>
          </Link>
          <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          <p>
            {isLogin
              ? 'Sign in to your SmartCampus account'
              : 'Join the future of Nigerian education'}
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>I am a</label>
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="parent">Parent</option>
              <option value="admin">Administrator</option>
            </select>
          </div>

          {isLogin && (
            <div className="form-options">
              <label className="checkbox">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="forgot-password">
                Forgot password?
              </a>
            </div>
          )}

          <button type="submit" className="btn-primary login-btn">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="login-footer">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              className="toggle-form"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>

          <div className="divider">
            <span>Or continue with</span>
          </div>

          <div className="social-login">
            <button className="social-btn google">
              <span>🔍</span> Google
            </button>
            <button className="social-btn microsoft">
              <span>🔗</span> Microsoft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
