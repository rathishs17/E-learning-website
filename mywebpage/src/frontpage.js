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
import { useState, useEffect } from "react";
import axios from "axios";

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
  const [product, setProduct] = useState([]);

  async function fetchdata() {
    const response = await axios.get('http://localhost:7007/');
    setProduct(response.data);
  }

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
    <Grid maxWidth="78%">

      <AppBar position="fixed"  sx={{ backgroundColor: 'black',color:'white' , boxShadow: '0px 2px 4px rgba(255, 255, 255, 0.2)' }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: '' }}>
            <b>MR Tech</b>
          </Typography>
          {/* <Button color="inherit" sx={{ color: 'black', marginLeft: '6%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Home
          </Button>
          <Link to={"/loginpage"}><Button color="inherit" sx={{ color: 'black', marginLeft: '6%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Login
          </Button></Link> */}
          <Link to="/coursepage" style={{ textDecoration: 'none' }}>
 <Button color="inherit" sx={{ color: 'white', backgroundColor: '#E75480' , marginLeft: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            GET_STARTED
          </Button></Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
 <Button color="inherit" sx={{ color: 'white', backgroundColor: '#E75480' , marginLeft: '29%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            ADMIN
          </Button></Link>
          {/* Add other navigation buttons as needed */}
        </Toolbar>
      </AppBar>


      


      <Grid container direction ="column" alignItems="center" justify="center" marginTop="5.5%" font fontStyle="" bgcolor="" marginLeft="15%">

    <Box sx={{ width: '200%', maxWidth: 750 }}>
      
      <Typography variant="h2" gutterBottom>
      <b>   Advance your engineering 
        skills with our courses</b>
      </Typography>
        <p>Build skills with our courses and mentor from world-class companies.</p>
      
    </Box>
    </Grid>







    

      <Container maxWidth="lg" marginTop="4%">
        <Grid container direction="column" marginLeft="3.9%" marginTop="5%">
          <Box sx={{ width: '200%', maxWidth: 750 }}>
            <Typography variant="h3" gutterBottom marginTop="4%" marginLeft="2.5%" >
              <b>Our Courses</b>
            </Typography>
          </Box>
        </Grid>
{/* 
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
        </Grid> */}
          {/* <div className="container d-flex flex-float gap-5 " style={{ marginRight:'51%',marginTop: '3%' ,width:'40%',height:'35%'}} >
      {product.map((v) => {
        return (
          <Link to="/coursepage">
          <div className="card">
            <img src={v.img} alt={v.name} />
            <p>{v.name}</p>
          </div>
        </Link>
        );
      })}
    </div> */}
    {/* <div className="container d-flex flex-float gap-5" style={{ marginRight:'71%', marginTop: '3%', width:'20%', height:'20%'}} >
  {product.map((v) => {
    return (
      <Link to="/coursepage" key={v.name} style={{ textDecoration: 'none' ,marginRight:'-3%'}}>
        <div className="card" style={{ width: '200px', height: '250px' }}>
          <img src={v.img} alt={v.name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
          <p><b>{v.name}</b></p>
        </div>
      </Link>
    );
  })}
</div> */}

<div className="container d-flex flex-float gap-5" style={{ marginRight:'75.3%', marginTop: '3%', width:'20%', height:'20%' }} >
  {product.map((v) => {
    return (
      <Link to="/coursepage" key={v.name} style={{ textDecoration: 'none' , marginRight:'-3%'}}>
        <div className="card-container" style={{ transition: 'transform 0.3s', borderRadius: '10px' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          <div className="card" style={{ width: '200px', height: '250px' }}>
            <img src={v.img} alt={v.name} style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '10px' }} />
            <p style={{color:'white'}}><b>{v.name}</b></p>
          </div>
        </div>
      </Link>
    );
  })}
</div>




{/* {product.map((v) => {
    return (
          <p>{v.name}</p>
    );
  })} */}


      </Container>

      <Grid container direction="column" mt={3} marginTop="5%" marginLeft="8%" >
        <Typography variant="h3" gutterBottom marginTop="5%">
          <b>Mentors</b>
        </Typography>
        <Grid container direction="row" marginRight="10%" marginLeft="-2%" marginTop="3%">
          <MentorCard name="Mark - web dev" image={m1} />
          <MentorCard name="shah - UX & UI" image={m2} />
          <MentorCard name="John - node dev" image={m3} />
          <MentorCard name="Rio - java dev" image={m4} />
          {/* Add more MentorCard components for additional mentors */}
        </Grid>
      </Grid>

      <Grid container direction="column" marginTop="3%" marginLeft="-4.8%" bgcolor="" mt={6}>
      <Box sx={{ width: '100%', maxWidth: 970, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom marginTop="8%">
          <b>What our happy students say...</b>
        </Typography>
        {/* <Typography variant="h6" paragraph marginLeft={"6%"}>
          Build skills with our courses and mentorship from world-class companies.
        </Typography> */}
        <Grid container direction="row" marginTop="7%" marginLeft="15.3%">
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
    </Grid>
    <br/>
<hr/>
      <Box
        component="footer"
        sx={{
          
          backgroundColor: 'black',
          color:'white',
          p: 6,
          marginTop: '4%',
          width: '100%',
        }}
      >
        <Container maxWidth="lg">
          {/* Footer content */}
          <Grid container spacing={5}>
            {/* About Us */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="white" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="">
                We are MR Tech company, dedicated to providing the best service to our learners.
              </Typography>
            </Grid>

            {/* Contact Us */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="">
                123 Main Street, Anytown, USA
              </Typography>
              <Typography variant="body2" color="">
                Email: mrtech@example.com
              </Typography>
              <Typography variant="body2" color="">
                Phone: +1 234 567 8901
              </Typography>
            </Grid>

            {/* Follow Us */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="" gutterBottom>
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
            <Typography variant="body2" color="" align="center">
              {"Copyright © "}
              <Link color="inherit" href="https://your-website.com/">
                MR Tech
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