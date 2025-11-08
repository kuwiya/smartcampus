// src/pages/Home.js
import React from 'react';
import '../styles/Home.css';
import heroImage from '../assets/child_alt1.png';
import studentsImage from '../assets/class_alt1.png';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section with Nigerian Children */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-image">
            {/* Placeholder for Nigerian children image */}
            <div className="image-placeholder">
              <img src={studentsImage} alt="Nigerian Students" className="hero-img" />
            </div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <span>🚀 Future of Education</span>
          </div>
          <h1 className="hero-title">
            Welcome to <span className="gradient-text">SmartCampus</span>
          </h1>
          <p className="hero-subtitle">
            Transform your school into an intelligent, connected digital campus powered by AI, virtual learning, and smart automation for the next generation.
          </p>
          <div className="hero-actions">
            <button className="btn-primary neon-glow"><a className="null-link" href="/contact">Get Started</a></button>
            <button className="btn-outline"><a 
                                              href="https://www.youtube.com/" 
                                              target="_blank" 
                                              rel="noopener noreferrer" 
                                              className="null-link"
                                            >Watch Demo</a></button>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Schools in Nigeria</div>
            </div>
            <div className="stat">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Students Empowered</div>
            </div>
            <div className="stat">
              <div className="stat-number">99%</div>
              <div className="stat-label">Parent Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Designed for Education</h2>
          <p className="section-subtitle">Tailored solutions addressing unique challenges in Nigerian schools</p>
          
          <div className="features-grid">
            <div className="feature-card glass">
              <div className="feature-icon">🌍</div>
              <h3>Localized Curriculum</h3>
              <p>AI powered learning aligned with Nigerian educational standards and cultural context</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">⚡</div>
              <h3>Offline Capability</h3>
              <p>Learn anywhere with our offline first approach, perfect for areas with limited internet</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">📱</div>
              <h3>Mobile Optimized</h3>
              <p>Accessible on all devices, designed for the mobile first Nigerian market</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Reliable</h3>
              <p>Bank level security ensuring student data protection and privacy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nigerian Schools Showcase */}
      <section className="showcase">
        <div className="container">
          <h2 className="section-title">Empowering your school to become a Smart Campus</h2>
          <div className="showcase-content">
            <div className="showcase-text">
              <h3>Together, we’re building the future of African education</h3>
              <p>
                At SmartCampus, we’re redefining how schools teach, learn, 
                and connect using technology to bridge the digital divide and give every child a fair chance to succeed.
              </p>
              <div className="showcase-features">
                <div className="showcase-feature">
                  <span>✅</span> Local language support
                </div>
                <div className="showcase-feature">
                  <span>✅</span> Cultural relevance
                </div>
                <div className="showcase-feature">
                  <span>✅</span> Affordable pricing
                </div>
                <div className="showcase-feature">
                  <span>✅</span> Teacher training
                </div>
              </div>
            </div>
            <div className="showcase-visual">
              <div className="nigerian-students-grid">
                <div className="student-card">🎓</div>
                <div className="student-card">💻</div>
                <div className="student-card">🔬</div>
                <div className="student-card">📚</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Sections */}
      <section className="platform-sections">
        <div className="container">
          <h2 className="section-title">Complete Digital Ecosystem</h2>
          <div className="platform-grid">
            <div className="platform-card student-platform glass">
              <h3>🎓 Student Hub</h3>
              <p>Interactive learning platform designed for Nigerian students</p>
              <ul>
                <li>📖 Digital Textbooks</li>
                <li>🤖 AI Tutoring in Local Languages</li>
                <li>📝 WAEC/NECO Preparation</li>
                <li>🎯 Personalized Learning Paths</li>
              </ul>
            </div>
            <div className="platform-card teacher-platform glass">
              <h3>👨‍🏫 Teacher Portal</h3>
              <p>Advanced tools for Nigerian educators</p>
              <ul>
                <li>📊 Smart Grading System</li>
                <li>📚 Lesson Plan Library</li>
                <li>👥 Virtual Staff Room</li>
                <li>📈 Student Progress Analytics</li>
              </ul>
            </div>
            <div className="platform-card parent-platform glass">
              <h3>👪 Parent Connect</h3>
              <p>Stay connected with your child's education journey</p>
              <ul>
                <li>📱 Real-time Updates</li>
                <li>🏫 PTA Meeting Portal</li>
                <li>📊 Performance Reports</li>
                <li>💬 Direct Teacher Messaging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;