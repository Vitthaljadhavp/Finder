import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/DashBoardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NavigationBar from './components/Navbar';
import DashboardPage from './pages/DashBoardPage';
import EmployerDashboard from './pages/EmployerDashboard';
import JobSeekerDashboard from './pages/JobSeekerDashboard';


import React, { useState, useEffect } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [user, setUser] = useState(null); // User data (role, name, etc.)

  // Mock function for login (replace with actual logic later)
  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Store user in localStorage
  };

  useEffect(() => {
    // Check if the user is already logged in (could be from localStorage or API call)
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    if (loggedUser) {
      setIsLoggedIn(true);
      setUser(loggedUser);
    }
  }, []);

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Conditional rendering for the dashboard based on login status */}
        <Route 
          path="/dashboard" 
          element={<DashboardPage user={user} isLoggedIn={isLoggedIn} />}
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
        <Route path="/jobseeker-dashboard" element={<JobSeekerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
