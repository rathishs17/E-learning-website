import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './adminlogin.css';
import { Link } from 'react-router-dom';

const StudentLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Logging in as Admin with username: ${username} and password: ${password}`);
    // You can add logic for authentication here
  };

  return (
    <div className="rat">
      <div className="login-container">
        <h1>Student Login</h1>
        <br/>
        <div className="login-inputs">
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br/>
          <br/>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           <br/>
           <br/>
        </div>
        <div className="login-buttons">
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
