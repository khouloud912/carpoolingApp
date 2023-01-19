import React, { useState } from "react"
import { useLoginUserMutation } from "../redux/api/authApi";

 const  Auth=()=> {
   const [username, setUsername]= useState('');
   const [password, setPassword]= useState('');
   const [phone, setPhone]= useState('');

   const onSubmitHandler=()=>{
    console.log("submit");
    const [loginUser, result] = useLoginUserMutation()

   }


  return (
     
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={onSubmitHandler}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="username"
              className="form-control mt-1"
              placeholder="Enter username"
              onChange={(e)=> setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <label>Phone</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Enter phone"
              onChange={(e)=> setPhone(e.target.value)}              
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
  )
}
export default Auth;