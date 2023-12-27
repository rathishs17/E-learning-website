import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const appStyle = {
  backgroundColor: '#007bff',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
 
};

const profileInfo = {
  name: 'John Doe',
  age: 25,
  location: 'Cityville',
  email: 'john.doe@example.com',
};

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
  margin: 'auto',
  border: '2px solid blue',
  padding: '10px',
  borderRadius: '50px 20px',
};

function TeacherProfile() {
  return (
    <>
      <div style={appStyle}>
        <Container maxWidth="md">
          <Box sx={style}>
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              {/* Add a photo above the box content */}
              <Avatar alt={profileInfo.name} src="/path/to/teacher/photo.jpg" sx={{ width: 80, height: 80, mx: 'auto', mt: 2 }} />
            </Box>

            <List component="nav" aria-label="profile info">
              <ListItem>
                <ListItemText primary={`Name: ${profileInfo.name}`} />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary={`Age: ${profileInfo.age}`} />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary={`Location: ${profileInfo.location}`} />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary={`Email: ${profileInfo.email}`} />
              </ListItem>
              <Divider />
              <ListItem sx={{ textAlign: 'center' }}>
              <Link to={"/coursepage"}>
                <Button variant="outlined" color="primary" sx={{ marginRight: 2 }}>
                  Course
                </Button>
                </Link>
                <Link to={"/teacherlogin"}>

                <Button variant="contained" color="primary">
                  Logout
                </Button>
                </Link>

              </ListItem>
            </List>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default TeacherProfile;
