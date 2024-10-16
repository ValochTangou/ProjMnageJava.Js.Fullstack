import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import Calendar from './pages/Calendar';

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />

      </Routes>
    </Router>
  );
}

export default App;
