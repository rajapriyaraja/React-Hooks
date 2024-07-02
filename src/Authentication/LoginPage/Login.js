import React, { useState } from 'react';
import { logInApiMethod } from '../Api/LoginApi';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [userLog, setUserLog] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLog({
      ...userLog,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await logInApiMethod(userLog);

      if (response && response.data && response.data.data) {
        localStorage.setItem('token', response.data.data.body.jwt);
        localStorage.setItem('email', response.data.data.body.userEmail); 

        if (response.data.data.body.role === "USER") {
          nav("/usertable");
        } else if (response.data.data.body.role === "ADMIN") {
          nav("/admintable");
        } else {
          setMessage("Unexpected user role");
          console.error("Unexpected user role", response.data.data.body.role);
        }
      } else {
        setMessage("User not found or invalid response");
        console.error("Unexpected response structure", response.data);
      }
    } catch (error) {
      setMessage("Error logging in");
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 col-xl-4">
          <div className="shadow-lg mt-5">
            <form onSubmit={handleSubmit} className="p-4 rounded">
              <h2 className="mb-4 text-center">Login</h2>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={userLog.email}
                  placeholder="Enter your email"
                  onChange={handleChange}
                  className="form-control mt-2"
                  required
                />
              </div>
              <div className="form-group">
                <label className="mt-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={userLog.password}
                  placeholder="Enter your password"
                  onChange={handleChange}
                  className="form-control mt-1"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary mt-4 w-100">Login</button>
              <span className="d-flex justify-content-center mt-2">(or)</span>
              <div className="mt-2">
                <p>If you don't have an account, please <a href='http://localhost:3000/'>Sign Up...</a></p>
              </div>
            </form>
            {message && <div className="alert alert-danger mt-3">{message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
