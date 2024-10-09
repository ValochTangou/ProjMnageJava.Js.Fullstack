import React from 'react';

function ForgotPassword() {
  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h2>Forgot Password</h2>
        <p>Please enter your email to recover your password</p>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" required />
          </div>
          <button type="submit" className="btn-modern">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
