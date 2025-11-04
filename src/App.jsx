// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Login from './pages/Login';
import Home from './pages/Home';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import Parents from './pages/Parents';
import About from './pages/About';
import Mission from './pages/Mission';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import HelpCenter from './pages/HelpCenter';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import FAQs from './pages/FAQs';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;