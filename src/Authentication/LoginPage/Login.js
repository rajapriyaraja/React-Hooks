

import React, { useState } from 'react';
import { logInApiMethod } from '../Api/LoginApi';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export const Login = () => {
  const [userLog, setUserLog] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLog({
      ...userLog,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await logInApiMethod(userLog);
    localStorage.setItem('token', response.data.data.body.jwt);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className=" p-4 rounded">
        <h1 className="mb-4">Login</h1>
        <div className="form-group w-25">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={userLog.email}
            placeholder="Enter your email"
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group w-25">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={userLog.password}
            placeholder="Enter your password"
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Login</button>
      </form>
    </div>
  );
};
