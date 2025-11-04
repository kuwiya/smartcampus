// src/pages/Teachers.js
import React, { useState } from 'react';
import '../styles/PortalPages.css';

const Teachers = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const classes = [
    { id: 1, name: 'Mathematics - Grade 10', students: 24, nextClass: 'Monday 10:00 AM' },
    { id: 2, name: 'Physics - Grade 11', students: 22, nextClass: 'Tuesday 12:00 PM' },
    { id: 3, name: 'Chemistry - Grade 12', students: 19, nextClass: 'Wednesday 2:00 PM' }
  ];

  const gradingTasks = [
    { id: 1, title: 'Math Quiz 3', status: 'pending', aiSuggestion: 'AI suggests rubric-based grading' },
    { id: 2, title: 'Physics Lab Report', status: 'completed', aiSuggestion: 'Reviewed by AI' },
    { id: 3, title: 'Chemistry Assignment', status: 'pending', aiSuggestion: 'Ready for AI grading' }
  ];

  const aiResources = [
    {
      id: 1,
      title: 'Lesson Plan Generator',
      desc: 'Generate a full lesson plan from topic, grade level and duration — includes objectives, activities and assessment.'
    },
    {
      id: 2,
      title: 'Auto-Assessment & Rubrics',
      desc: 'Create rubrics and auto-grade objective questions; receive suggested marks for subjective answers to review quickly.'
    },
    {
      id: 3,
      title: 'Parent Communication Templates',
      desc: 'Auto-generate report messages, PTA summaries and student progress emails tailored to each parent.'
    },
    {
      id: 4,
      title: 'Activity & Resource Ideas',
      desc: 'Instant classroom activity ideas and printable worksheets aligned to the lesson.'
    },
    {
      id: 5,
      title: 'Attendance & Risk Predictor',
      desc: 'Predict students at risk of low attendance or dropout and get recommended interventions.'
    }
  ];

  return (
    <div className="portal-page teacher-portal">
      <div className="portal-header">
        <h1>👨‍🏫 Teacher Portal</h1>
        <p>Empowering educators with smart tools for modern classrooms.</p>
      </div>

      <div className="portal-layout">
        <div className="sidebar glass">
          <div className="sidebar-menu">
            <button className={`menu-item ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}>
              📊 Dashboard
            </button>
            <button className={`menu-item ${activeTab === 'classes' ? 'active' : ''}`}
              onClick={() => setActiveTab('classes')}>
              🏫 My Classes
            </button>
            <button className={`menu-item ${activeTab === 'grading' ? 'active' : ''}`}
              onClick={() => setActiveTab('grading')}>
              📝 Smart Grading
            </button>
            <button className={`menu-item ${activeTab === 'resources' ? 'active' : ''}`}
              onClick={() => setActiveTab('resources')}>
              💡 AI Resources
            </button>
          </div>
        </div>

        <div className="main-content">
          {activeTab === 'dashboard' && (
            <div className="dashboard-grid">
              <div className="stat-card glass">
                <h3>Lessons Taught</h3>
                <div className="stat-value">24</div>
                <div className="stat-trend">+10% this term</div>
              </div>
              <div className="stat-card glass">
                <h3>Assignments</h3>
                <div className="stat-value">18/24</div>
                <div className="stat-trend">Graded By AI Assistant</div>
              </div>
              <div className="stat-card glass">
                <h3>Class Performance</h3>
                <div className="stat-value">87%</div>
                <div className="stat-trend">Above average</div>
              </div>

              <div className="quick-actions glass">
                <h3>Quick Actions</h3>
                <div className="quick-actions-row">
                  <button className="btn-primary">Create Assignment</button>
                  <button className="btn-primary">Schedule Class</button>
                  <button className="btn-primary">AI Lesson Plan</button>
                  <button className="btn-primary">curriculum</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'classes' && (
            <div className="classes-section">
              <h2>My Classes</h2>
              <div className="assignments-grid">
                {classes.map(cls => (
                  <div key={cls.id} className="assignment-card glass">
                    <div className="class-card-row">
                      <div>
                        <h4>{cls.name}</h4>
                        <p>Students: {cls.students}</p>
                        <p>Next Class: {cls.nextClass}</p>
                      </div>
                      <div className="class-card-actions">
                        <button className="btn-primary">Manage Class</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'grading' && (
            <div className="grading-section">
              <h2>Smart Grading</h2>
              <div className="assignments-grid">
                {gradingTasks.map(task => (
                  <div key={task.id} className="grading-card glass">
                    <div className="grading-header">
                      <h4>{task.title}</h4>
                      <span className={`status ${task.status}`}>{task.status}</span>
                    </div>
                    <p className="grading-suggestion">{task.aiSuggestion}</p>
                    <div className="grading-actions">
                      <button className="btn-primary">Review AI Grading</button>
                      <button className="btn-small">View Submissions</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="resources-section">
              <h2>AI Teaching Resources</h2>
              <div className="chat-interface">
                <div className="chat-messages">
                  <div className="message ai-message">
                    Hello! I’m your AI teaching assistant, here to help you plan lessons, create activities, grade assignments, and make your daily teaching workflow more efficient.
                  </div>
                </div>
                <div className="chat-input">
                  <input type="text" placeholder="Ask me anything..." />
                  <button className="btn-primary">Send</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
