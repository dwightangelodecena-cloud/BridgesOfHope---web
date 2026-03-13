import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports
import LandingPage from './landingpage';
import Login from './login';
import SignUp from './signup'; 
import ForgotPassword from './forgot'; 
import Verify from './verify'; 
import NewPass from './newpass';
import HomeDashboard from './home'; 
import Admission from './admission';
import Service from './service'; 
// ADDED PROGRESS IMPORT
import Progress from './progress'; 
// ADDED PROFILE IMPORT
import Profile from './profile';
// ADDED CHANGEPASS IMPORT
import ChangePass from './changepass';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/newpass" element={<NewPass />} />

        {/* Dashboard & Internal Routes */}
        <Route path="/home" element={<HomeDashboard />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/services" element={<Service />} />
        
        {/* ADDED ROUTE FOR PROGRESS */}
        <Route path="/progress" element={<Progress />} />

        {/* ADDED ROUTE FOR PROFILE */}
        <Route path="/profile" element={<Profile />} />

        {/* ADDED ROUTE FOR CHANGEPASS */}
        <Route path="/changepass" element={<ChangePass />} />
      </Routes>
    </Router>
  );
}

export default App;