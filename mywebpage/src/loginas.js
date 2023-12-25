import { FaGoogle } from 'react-icons/fa';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import v from "./images/logoimg.jpg";
import './loginas.css';
import { Link } from 'react-router-dom';
const LoginComponent = () => {
  const handleLogin = (role) => {
    console.log(`Logging in as ${role}`);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div class="rat">
{/* <div className="logo">
<img src={v} />
        </div> */}
    <div className="login-container">
      <h1>Continue as ..</h1>
      <div className="login-buttons">
      <Link to={"/adminlogin"}> <Button variant="contained">Admin</Button></Link>
      <Link to={"/teacherlogin"}><Button variant="contained">Teacher</Button></Link>
      <Link to={"/studentlogin"}><Button variant="contained">Student</Button></Link>
      </div>
      <div className="additional-options">
        <p>
          {/* <a href="/signup">Don't have an account? SignUp</a> */}
        </p>
      </div>
      </div>
    </div>
  );
};

export default LoginComponent;
