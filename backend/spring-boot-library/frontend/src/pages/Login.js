import React from 'react';

function Login() {
  return (
    <div className="login">
      <h2>Login</h2>

      <form>
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" placeholder="Enter username" required/>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Enter email" required/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" required/>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>

      <div className="extra-links">
        <a href="/forgot-password">Forgot password?</a>
        <a href="/forgot-username">Forgot username?</a>
      </div>
    </div>
  );
}

export default Login;