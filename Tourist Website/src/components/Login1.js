import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
function Login1() {
  return (
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <h2 className="mb-3">Login Form</h2>
        <form action="POST" className="needs-validation">
          <div className="form-group was-validated mb-2">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-control" required></input>
            <div className="invalid-feedback">Please Enter your Email.</div>
          </div>
          <div className="form-group was-validated mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" required></input>
            <div className="invalid-feedback">Please Enter your Password.</div>
          </div>
          <div className="form-group mb-2">
            <input type="checkbox" className="form-check-input"></input>
            <label htmlFor="check" className="form-check-label">
              Remember Me
            </label>
          </div>
          <button type="submit" className="btn btn-success block w-100 mt-2">
            SIGN IN
          </button>
        </form>
        <br />
        <p>Or</p>
        <br />
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
export default Login1;
