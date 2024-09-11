import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '.pages/Home';
import Login from '.pages/Login';
import MainPge from '.pages/MainPage';
import Register from '.pages/Register';
import AboutAuthor from '.pages/AboutAuthor';
import Overview from '.pages/Overview';
import ForgotPassword from '.pages/ForgotPassword';
import ForgotUsername from '.pages/ForgotUsername';
import Message from '.pages/Message';
import Setting from '.pages/Setting';

function App() {
  return(
     <Router>
     <Switch>
     <Route Path="/login" component={Login} />
     <Route Path="/forgot-password" component={ForgotPassword} />
     <Route Path="/register" component={Register} />
     <Route Path="/main-page" component={MainPage} />
     <Route Path="/overview" component={Overview} />

     </Switch>
    </Router>

  );
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="opener referrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
