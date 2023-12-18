import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function ResponsiveAppBar1() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#FFEBEB' }}>
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, color: 'black' }}
        >
         <b>MR Tech</b> 
        </Typography>
        <Button color="inherit" sx={{ color: 'black', marginLeft: '6%', display:'flex', alignItems:'center', justifyContent:'center' }}>
          Home
        </Button>
        <Button color="inherit" sx={{ color: 'black', marginLeft: '10px' }}>
          Course
        </Button>
        <Button color="inherit" sx={{ color: 'black', marginLeft: '10px' }}>
          Mentors
        </Button>
        <Button color="inherit" sx={{ color: 'black', marginLeft: '10px' }}>
          Testimonials
        </Button>
        <Button color="inherit" sx={{ color: 'black', marginLeft: '10px' }}>
          Join
        </Button>
        <Button color="inherit" sx={{ color: 'black', marginLeft: '10px' }}>
          Contact Us
        </Button>
        <Button variant="outlined" color="inherit" sx={{ color: 'black', marginLeft: '10px' }}>
          Login
        </Button>
        <Button variant="outlined" color="inherit" sx={{ color: 'white',bgcolor:'#FF1493',marginLeft: '10px' }}>
          Register
        </Button>
      </Toolbar>
    </AppBar>
    

  );
}

export default ResponsiveAppBar1;
