// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';




import { Navigate } from 'react-router-dom';
import Button from '@mui/material/Button';






// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         MR Tech
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }


// const defaultTheme = createTheme();

// export default function SignIn() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 0,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//              <Link to={"/coursepage"}><Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button></Link>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link  to="/signuppage" href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const SignIn = () => {
  const [user, setUser] = useState('test');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const adminPassword = 'Rathish123'; // Replace with your actual admin password
  const adminName='Rathish'
  const handleButtonClick = () => {
    if (!user) {
      // If the user is logged in, navigate to the user's home page
      navigate('/');
    } else if (password === adminPassword && name==adminName) {
      // If the admin password is correct, navigate to the admin page
      navigate('/card-container');
    } else {
      // Handle incorrect password case or display an error message
      alert('Incorrect password. Access denied.');
    }
  };

  return (
    <>
      <div>
      </div>
   
      {user && (
        <>
          <TextField
            type="password"
            label="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           <TextField
            type="Name"
            label="Admin Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button variant="contained" onClick={handleButtonClick}>
            Go to Admin
          </Button>
        </>
      )}
    </>
  );
};

export default SignIn;

