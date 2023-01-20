import React, { useState } from "react";
import { useLoginUserMutation } from "../redux/api/authApi";


const Login = () => {
  let [authMode, setAuthMode] = useState("signin")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, result] = useLoginUserMutation();

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const user = {
    identity: username,
    password,
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    console.log("submit");
    await loginUser(user);
    console.log("kokita", result);
  };

  
  if (authMode === "signin") {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={onSubmitHandler}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="username"
              className="form-control mt-1"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
};
export default Login;
