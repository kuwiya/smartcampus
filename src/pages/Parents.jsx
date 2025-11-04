// src/pages/Parents.js
import React, { useState } from 'react';
import '../styles/PortalPages.css';

const Parents = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const children = [
    { name: 'Emily Johnson', grade: '5th Grade', teacher: 'Ms. Smith' },
    { name: 'Michael Johnson', grade: '8th Grade', teacher: 'Mr. Davis' }
  ];

  const updates = [
    { type: 'grade', message: 'Math test: A-', date: '2024-01-10' },
    { type: 'attendance', message: 'Present all week', date: '2024-01-12' },
    { type: 'assignment', message: 'Science project submitted', date: '2024-01-14' }
  ];

  const progressReports = [
    { subject: 'Mathematics', score: '92%', trend: 'Excellent progress' },
    { subject: 'Science', score: '88%', trend: 'Improving steadily' },
    { subject: 'English', score: '85%', trend: 'Consistent performance' }
  ];

  const attendanceRecords = [
    { month: 'January', attendance: '96%', remarks: 'Excellent' },
    { month: 'February', attendance: '93%', remarks: 'Good' },
    { month: 'March', attendance: '89%', remarks: 'Needs Improvement' }
  ];

  const messages = [
    { from: 'Ms. Smith', subject: 'Upcoming Science Fair', date: '2024-01-10' },
    { from: 'Mr. Davis', subject: 'Parent Feedback Request', date: '2024-01-12' },
    { from: 'School Admin', subject: 'Mid-term Report Ready', date: '2024-01-14' }
  ];

  return (
    <div className="portal-page parent-portal">
      <div className="portal-header">
        <h1>👪 Parent Portal</h1>
        <p>Stay connected with your child's education</p>
      </div>

      <div className="portal-layout">
        {/* Sidebar Navigation */}
        <div className="sidebar glass">
          <div className="sidebar-menu">
            <button className={`menu-item ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}>
              👁️ Overview
            </button>
            <button className={`menu-item ${activeTab === 'progress' ? 'active' : ''}`}
              onClick={() => setActiveTab('progress')}>
              📊 Progress
            </button>
            <button className={`menu-item ${activeTab === 'attendance' ? 'active' : ''}`}
              onClick={() => setActiveTab('attendance')}>
              ✅ Attendance
            </button>
            <button className={`menu-item ${activeTab === 'pta' ? 'active' : ''}`}
              onClick={() => setActiveTab('pta')}>
              🤝 PTA Portal
            </button>
            <button className={`menu-item ${activeTab === 'messages' ? 'active' : ''}`}
              onClick={() => setActiveTab('messages')}>
              💬 Messages
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="main-content">
          {/* --- Overview --- */}
          {activeTab === 'overview' && (
            <div className="overview-section">
              <div className="children-list glass">
                <h3>Your Children</h3>
                {children.map(child => (
                  <div key={child.name} className="child-card">
                    <h4>{child.name}</h4>
                    <p>{child.grade} - {child.teacher}</p>
                    <button className="btn-outline">View Details</button>
                  </div>
                ))}
              </div>

              <div className="recent-updates glass">
                <h3>Recent Updates</h3>
                {updates.map((update, index) => (
                  <div key={index} className="update-item">
                    <span className={`update-type ${update.type}`}>
                      {update.type}
                    </span>
                    <p>{update.message}</p>
                    <small>{update.date}</small>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* --- Progress --- */}
          {activeTab === 'progress' && (
            <div className="progress-section glass">
              <h2>Academic Progress</h2>
              <div className="assignments-grid">
                {progressReports.map((report, index) => (
                  <div key={index} className="assignment-card glass">
                    <h4>{report.subject}</h4>
                    <p>Score: {report.score}</p>
                    <span className="status completed">{report.trend}</span>
                    <button className="btn-primary">View Details</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* --- Attendance --- */}
          {activeTab === 'attendance' && (
            <div className="attendance-section glass">
              <h2>Attendance Overview</h2>
              <div className="assignments-grid">
                {attendanceRecords.map((record, index) => (
                  <div key={index} className="assignment-card glass">
                    <h4>{record.month}</h4>
                    <p>Attendance: {record.attendance}</p>
                    <span className="status completed">{record.remarks}</span>
                    <button className="btn-primary">View Report</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* --- PTA Portal --- */}
          {activeTab === 'pta' && (
            <div className="pta-section glass">
              <h2>Parent-Teacher Association</h2>
              <div className="pta-events">
                <h3>Upcoming Events</h3>
                <div className="event-card">
                  <h4>Monthly PTA Meeting</h4>
                  <p>January 20, 2024 • 6:00 PM • Virtual</p>
                  <button className="btn-primary">RSVP</button>
                </div>
                <div className="event-card">
                  <h4>STEM Fair Planning</h4>
                  <p>January 25, 2024 • 5:30 PM • School Library</p>
                  <button className="btn-primary">Volunteer</button>
                </div>
              </div>
            </div>
          )}

          {/* --- Messages --- */}
          {activeTab === 'messages' && (
            <div className="ai-tutor-section glass">
              <h2>Messages & Announcements</h2>
              <div className="assignments-grid">
                {messages.map((msg, index) => (
                  <div key={index} className="assignment-card glass">
                    <h4>{msg.subject}</h4>
                    <p>From: {msg.from}</p>
                    <small>{msg.date}</small>
                    <button className="btn-primary">Read Message</button>
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

export default Parents;
