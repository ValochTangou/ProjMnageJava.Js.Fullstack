import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import Register from './pages/Register';
import AboutAuthor from './pages/AboutAuthor';
import Overview from './pages/Overview';
import ForgotPassword from './pages/ForgotPassword';
import ForgotUsername from './pages/ForgotUsername';
import Message from './pages/Message';
import Setting from './pages/Setting';
import Team from './pages/Team';
import Calendar from './pages/Calendar';
import Project from './pages/Project';
import Ticket from './pages/Ticket';

function Layout() {
  const location = useLocation();
  const hideMenuRoutes = ['/login', '/register', '/forgot-password', '/forgot-username'];
  const shouldHideMenu = hideMenuRoutes.includes(location.pathname);

  return (
    <div>
      {!shouldHideMenu && (
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/main-page">Main Page</Link></li>
            <li><Link to="/overview">Overview</Link></li>
            <li><Link to="/message">Message</Link></li>
            <li><Link to="/about-author">About Author</Link></li>
          </ul>
        </nav>
      )}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-username" element={<ForgotUsername />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/message" element={<Message />} />
        <Route path="/about-author" element={<AboutAuthor />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/team" element={<Team />} />
        <Route path="/project" element={<Project />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
