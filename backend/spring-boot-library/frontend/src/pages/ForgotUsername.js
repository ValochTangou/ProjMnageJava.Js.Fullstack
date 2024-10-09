import React from 'react';

function ForgotUsername() {
  return (
    <div className="forgot-username-container">
      <div className="forgot-username-form">
        <h2>Forgot Username</h2>
        <p>Please enter your email to retrieve your username</p>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" required />
          </div>
          <button type="submit" className="btn-modern">Send Username</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotUsername;
