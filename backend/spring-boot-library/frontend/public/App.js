import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Switch>
        <Route Path="/login" component={Login} />
        <Route Path="/forgot-password" component={ForgotPassword} />
        <Route Path="/register" component={Register} />
        <Route Path="/main-page" component={MainPage} />
        <Route Path="/overview" component={Overview} />
        <Route exact path="/" component={Home} /> {/* Added exact path for Home */}
      </Switch>
    </Router>
  );
}

export default App;