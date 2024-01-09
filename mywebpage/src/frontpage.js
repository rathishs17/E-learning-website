import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid, Card, CardContent, Container,  CardMedia } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import webpic from "./images/webpic.jpg";
import m1 from "./images/mentor1.jpg";
import m2 from "./images/mentor2.jpg";
import m3 from "./images/mentor3.jpg";
import m4 from "./images/mentor4.jpg";
import s1 from "./images/student1.jpg";
import s2 from "./images/student2.jpg";
import s3 from "./images/student3.jpg";

import { Link } from 'react-router-dom';

const MentorCard = ({ name, image }) => (
    <Card sx={{ maxWidth: 345, margin: '2%' }}>
      <CardMedia
        sx={{ height: 180 }}
        image={image}
        title="Mentor Image"
      />
      <Typography variant="h5" component="div" textAlign="center" mt={2}>
        {name}
      </Typography>
    </Card>
  );
  
  const EmployeeReviewCard = ({ name, position, review, image }) => (
    <Card sx={{ maxWidth: 300, margin: '1%' }}>
      <CardMedia
        sx={{ height: 180 }} 
        image={image}
        title={`${name} - ${position}`}
      />
      <Typography variant="h6" mt={2} textAlign="center">
        {name}
      </Typography>
      <Typography variant="body2" color="textSecondary" textAlign="center">
        {position}
      </Typography>
      <Typography variant="body1" textAlign="center" mt={2}>
        {review}
      </Typography>
    </Card>
  );

function Homepage() {
  return (
    <>
      <AppBar position="fixed"  sx={{ backgroundColor: '#FFEBEB' }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'black' }}>
            <b>MR Tech</b>
          </Typography>
          {/* <Button color="inherit" sx={{ color: 'black', marginLeft: '6%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Home
          </Button>
          <Link to={"/loginpage"}><Button color="inherit" sx={{ color: 'black', marginLeft: '6%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Login
          </Button></Link> */}
          <Link to="/login" style={{ textDecoration: 'none' }}>
 <Button color="inherit" sx={{ color: 'white', backgroundColor: '#E75480' , marginLeft: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            GET_STARTED
          </Button></Link>
          {/* Add other navigation buttons as needed */}
        </Toolbar>
      </AppBar>

      <Grid container direction ="column" alignItems="center" justify="center" marginTop="4.5%" font fontStyle="" bgcolor="" >

    <Box sx={{ width: '200%', maxWidth: 750 }}>
      
      <Typography variant="h2" gutterBottom>
      <b>   Advance your engineering 
        skills with our courses</b>
      </Typography>
        <p>Build skills with our courses and mentor from world-class companies.</p>
      
    </Box>
    </Grid>

      <Container maxWidth="lg" marginTop="4%">
        <Grid container direction="column" marginLeft="1.5%" marginTop="5%">
          <Box sx={{ width: '200%', maxWidth: 750 }}>
            <Typography variant="h3" gutterBottom marginTop="4%">
              <b>Our Course</b>
            </Typography>
            <h3>Web Development</h3>
          </Box>
        </Grid>

        <Grid container spacing={3} marginTop="3%" marginLeft="5%">
          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 140 }} image={webpic} title="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" marginLeft="1%">
                  HTML, CSS, JavaScript
                </Typography>
                <Typography variant="body2" color="text.secondary" marginLeft="1%">
                  HTML, CSS, JavaScript are the most widely used languages in the field of web development.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more cards or content as needed */}
        </Grid>
      </Container>

      <Grid container direction="column" mt={3} marginTop="5%" marginLeft="15%" >
        <Typography variant="h3" gutterBottom marginTop="5%">
          <b>Mentors</b>
        </Typography>
        <Grid container direction="row" marginRight="10%" marginLeft="2%" marginTop="3%">
          <MentorCard name="Mark mark mark" image={m1} />
          <MentorCard name="Ana de de de" image={m2} />
          <MentorCard name="John john john" image={m3} />
          <MentorCard name="Rio rio rio rio" image={m4} />
          {/* Add more MentorCard components for additional mentors */}
        </Grid>
      </Grid>

      <Grid container direction="column" marginTop="3%" marginLeft="6.5%" bgcolor="" mt={6}>
      <Box sx={{ width: '100%', maxWidth: 970, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom marginTop="8%">
          <b>What our happy students say...</b>
        </Typography>
        {/* <Typography variant="h6" paragraph marginLeft={"6%"}>
          Build skills with our courses and mentorship from world-class companies.
        </Typography> */}
        <Grid container direction="row" marginTop="7%" marginLeft="18%">
          <EmployeeReviewCard
            name="John Doe"
            position="Software Engineer"
            review="I learned a lot from the courses. Great mentorship!"
            image={s1}
          />
          <EmployeeReviewCard
            name="Jane Smith"
            position="Data Scientist"
            review="Amazing platform! The courses are top-notch."
            image={s2}
          />
          <EmployeeReviewCard
            name="Bob Johnson"
            position="UX Designer"
            review="The mentorship program is a game-changer."
            image={s3}
          />
        </Grid>
      </Box>
    </Grid>

      <Box
        component="footer"
        sx={{
          backgroundColor: 'pink',
          p: 6,
          marginTop: '5%',
        }}
      >
        <Container maxWidth="lg">
          {/* Footer content */}
          <Grid container spacing={5}>
            {/* About Us */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We are MR Tech company, dedicated to providing the best service to our learners.
              </Typography>
            </Grid>

            {/* Contact Us */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                123 Main Street, Anytown, USA
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: mrtech@example.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: +1 234 567 8901
              </Typography>
            </Grid>

            {/* Follow Us */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Follow Us
              </Typography>
              <Link href="https://www.facebook.com/" color="inherit">
                <Facebook />
              </Link>
              <Link href="https://www.instagram.com/" color="inherit" sx={{ pl: 1, pr: 1 }}>
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <Twitter />
              </Link>
            </Grid>
          </Grid>

          {/* Copyright */}
          <Box mt={5}>
            <Typography variant="body2" color="text.secondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="https://your-website.com/">
                Your Website
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </Box> 
      
    </>
  );
}

export default Homepage;
