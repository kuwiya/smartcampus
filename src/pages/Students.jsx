// src/pages/Students.js
import React, { useState } from 'react';
import '../styles/PortalPages.css';

const Students = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const assignments = [
    { id: 1, title: 'Math Problem Set', due: '2024-01-15', status: 'pending' },
    { id: 2, title: 'Science Lab Report', due: '2024-01-18', status: 'completed' },
    { id: 3, title: 'History Essay', due: '2024-01-20', status: 'pending' }
  ];

  const classes = [
    {
      id: 'mth101',
      name: 'Mathematics',
      teacher: 'Dr. Smith',
      time: '9:00 AM',
      room: 'Room A1',
      description: 'Algebra, problem solving and exam practice',
      meetingLink: '#'
    },
    {
      id: 'sci201',
      name: 'Science',
      teacher: 'Ms. Johnson',
      time: '10:30 AM',
      room: 'Lab 2',
      description: 'Practical experiments and lab report guidance',
      meetingLink: '#'
    },
    {
      id: 'his301',
      name: 'History',
      teacher: 'Mr. Davis',
      time: '1:00 PM',
      room: 'Room B3',
      description: 'Discussion of major historical events and essay writing',
      meetingLink: '#'
    }
  ];

  const progressData = [
    { subject: 'Mathematics', percent: 82, grade: 'B+' },
    { subject: 'Science', percent: 91, grade: 'A-' },
    { subject: 'History', percent: 75, grade: 'B' },
    { subject: 'English', percent: 88, grade: 'B+' }
  ];

  return (
    <div className="portal-page student-portal">
      <div className="portal-header">
        <h1>🎓 Student Portal</h1>
        <p>Your futuristic learning dashboard</p>
      </div>

      <div className="portal-layout">
        <div className="sidebar glass">
          <div className="sidebar-menu">
            <button className={`menu-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
              📊 Dashboard
            </button>
            <button className={`menu-item ${activeTab === 'classes' ? 'active' : ''}`} onClick={() => setActiveTab('classes')}>
              🏫 Virtual Classes
            </button>
            <button className={`menu-item ${activeTab === 'assignments' ? 'active' : ''}`} onClick={() => setActiveTab('assignments')}>
              📝 Assignments
            </button>
            <button className={`menu-item ${activeTab === 'ai-tutor' ? 'active' : ''}`} onClick={() => setActiveTab('ai-tutor')}>
              🤖 AI Tutor
            </button>
            <button className={`menu-item ${activeTab === 'progress' ? 'active' : ''}`} onClick={() => setActiveTab('progress')}>
              📈 Progress
            </button>
          </div>
        </div>

        <div className="main-content">
          {activeTab === 'dashboard' && (
            <div className="dashboard-grid">
              <div className="stat-card glass">
                <h3>Current GPA</h3>
                <div className="stat-value">3.8</div>
                <div className="stat-trend">↑ 0.2 this term</div>
              </div>
              <div className="stat-card glass">
                <h3>Pending Assignments</h3>
                <div className="stat-value">2</div>
                <div className="stat-trend">Due this week</div>
              </div>
              <div className="stat-card glass">
                <h3>AI Tutor Sessions</h3>
                <div className="stat-value">12</div>
                <div className="stat-trend">This month</div>
              </div>

              <div className="upcoming-classes glass">
                <h3>Today's Classes</h3>
                {classes.map(cls => (
                  <div key={cls.id} className="class-item">
                    <span className="class-time">{cls.time}</span>
                    <span className="class-name">{cls.name}</span>
                    <span className="class-teacher">{cls.teacher}</span>
                    <button className="btn-small">Join</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'classes' && (
            <div className="classes-section">
              <h2>Virtual Classes</h2>
              <p>Join live lessons or view class details and resources.</p>

              <div className="assignments-grid">
                {classes.map(cls => (
                  <div key={cls.id} className="class-card glass">
                    <div className="class-card-header">
                      <div>
                        <h4>{cls.name}</h4>
                        <p>{cls.teacher} • {cls.time} • {cls.room}</p>
                      </div>
                      <div className="class-actions">
                        <a href={cls.meetingLink} onClick={e => e.preventDefault()} className="btn-small">
                          Join
                        </a>
                        <button className="btn-small">Resources</button>
                      </div>
                    </div>
                    <p className="class-description">{cls.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'assignments' && (
            <div className="assignments-section">
              <h2>Your Assignments</h2>
              <div className="assignments-grid">
                {assignments.map(assignment => (
                  <div key={assignment.id} className="assignment-card glass">
                    <h4>{assignment.title}</h4>
                    <p>Due: {assignment.due}</p>
                    <span className={`status ${assignment.status}`}>{assignment.status}</span>
                    <button className="btn-primary">Start Assignment</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ai-tutor' && (
            <div className="ai-tutor-section glass">
              <h2>AI Learning Assistant</h2>
              <div className="chat-interface">
                <div className="chat-messages">
                  <div className="message ai-message">
                    Hello! I'm your AI tutor. How can I help you with your studies today?
                  </div>
                </div>
                <div className="chat-input">
                  <input type="text" placeholder="Ask me anything..." />
                  <button className="btn-primary">Send</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'progress' && (
            <div className="progress-section">
              <h2>Your Progress</h2>
              <p>Overview of your latest grades and completion rates.</p>

              <div className="assignments-grid">
                {progressData.map(p => (
                  <div key={p.subject} className="progress-card glass">
                    <div className="progress-header">
                      <div>
                        <h4>{p.subject}</h4>
                        <p>Current Grade: <strong>{p.grade}</strong></p>
                      </div>
                      <div className="progress-percent">{p.percent}%</div>
                    </div>

                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${p.percent}%` }} />
                    </div>

                    <div className="progress-date">Last updated: Oct 20, 2024</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Students;
