import React, { useState } from "react";
import { useLoginUserMutation, useRegisterUserMutation } from "../redux/api/authApi";


const Login = () => {
  let [authMode, setAuthMode] = useState("signin");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");


  const [loginUser, result] = useLoginUserMutation();
  const [registerUser, user] = useRegisterUserMutation();

  const userLogin = {
    identity: username,
    password,
  };

  const userRegister = {
    username,
    email,
    password,
    passwordConfirm,
    type, 
    phone
  };


  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    if (authMode === "signin"){
      await loginUser(userLogin);
      console.log("result login", result);
      
  }else{
      await registerUser(userRegister);   
      console.log("result", user)
    }
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
      <form className="Auth-form" onSubmit={onSubmitHandler}>
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
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label> Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Confirm Password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Phone</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <select
             value={type}
             className="form-control mt-1"
             onChange={(e) => setType(e.target.value)}>
              <option value="Client">Client</option>
              <option value="Covoitureur">Covoitureur</option>
            </select>
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
   
        </div>
      </form>
    </div>
  )
};
export default Login;
