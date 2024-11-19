import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
//import Login from './pages/Login';
//import Register from './pages/Register';
import UserLogin from './pages/Login';
import RecruiterLogin from './pages/Login';
import UserRegister from './pages/Register';
import RecruiterRegister from './pages/Register';
import ResumeBuilder from './pages/ResumeBuilder';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/user" element={<UserLogin />} />
        <Route path="/login/recruiter" element={<RecruiterLogin />} />
        <Route path="/register/recruiter" element={<RecruiterRegister />} />
        <Route path="/register/user" element={<UserRegister />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
      </Routes>
    </Router>
  );
};

export default App;
