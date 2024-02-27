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
import homee from "./images/hom.jpg";
import rev from "./images/rev.jpg";
import s3 from "./images/student3.jpg";
import logo from "./images/logoimg.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';


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
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: '',
    color: theme.palette.text.secondary,
    height: 'auto', // Adjusted height to fit content
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'row', // Align items in row
    justifyContent: 'space-between',
    alignItems: 'center', // Vertically center items
    bgcolor:'#f0f0f0'
  }));
  
  const darkTheme = createTheme({ palette: { mode: 'dark' } });
function Homepage() {











  const [faqs, setFaqs] = useState([
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      isOpen: false,
    },
    {
      question: 'Why do we use it?',
      answer: 'It is a long established fact that a reader will be distracted by the readable content...',
      isOpen: false,
    },
    {
      question: 'Where does it come from?',
      answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text...',
      isOpen: false,
    },
    {
      question: 'Where can I get some?',
      answer: 'There are many variations of passages of Lorem Ipsum available...',
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) => {
      const newFaqs = [...prevFaqs];
      newFaqs[index].isOpen = !newFaqs[index].isOpen;
      return newFaqs;
    });
  };











  const names = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown', 'Emily Taylor', 'Michael Clark'];
  const comments = [
    "This course was incredibly informative and well-structured. I highly recommend it!",
    "I found the course material to be engaging and easy to follow. Great learning experience!",
    "The instructors were knowledgeable and supportive throughout the course. Thumbs up!",
    "Excellent content and delivery. I'm glad I took this course!",
    "The course exceeded my expectations. It was worth every penny!",
    "I've learned so much from this course. Thank you for the valuable insights!",
  ];

  const profilePics = [
m1,m2,m3,m4,m2,m3
];
  const [product, setProduct] = useState([]);

  async function fetchdata() {
    const response = await axios.get('https://e-learning-platform-462n.onrender.com/');
    setProduct(response.data);
  }

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
    <Grid maxWidth="78%">

      <AppBar position="fixed"  sx={{ backgroundColor: '#101629',color:'white' , boxShadow: '0px 2px 4px rgba(255, 255, 255, 0.2)' }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: '' }}>
            <b>MR Tech</b>
          </Typography>
          <Link to="/coursepage" style={{ textDecoration: 'none' }}>
 <Button color="inherit" sx={{ color: 'white', backgroundColor: '' , marginLeft: '-152%', display: 'flex', alignItems: 'center', justifyContent: 'center' ,'&:hover': {
            color: 'skyblue'
        }}}>
            Home
          </Button></Link>
          <Link to="/coursepage" style={{ textDecoration: 'none' }}>
 <Button color="inherit" sx={{ color: 'white', backgroundColor: '' , marginLeft: '-72%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Courses
          </Button></Link>
          <Link to="/coursepage" style={{ textDecoration: 'none' }}>
 <Button color="inherit" sx={{ color: 'white', backgroundColor: '' , marginLeft: '-30%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           About
          </Button></Link>
          {/* <Link to="/coursepage" style={{ textDecoration: 'none' }}>
 <Button color="inherit" sx={{ color: 'white', backgroundColor: '#' , marginLeft: '-28%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
 Critique
          </Button></Link> */}
          <Link to="/login" style={{ textDecoration: 'none' }}>
 <Button color="inherit" sx={{ color: 'white', backgroundColor: '' , marginLeft: '18.5%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Admin
          </Button></Link>
        </Toolbar>
      </AppBar>





      <Box sx={{ marginTop: 5.9, padding: 4, marginLeft:"10%" ,marginRight:"0%",backgroundColor:"",width:"104%"}}>
        <Grid container spacing={3}>
          {/* Left Column (Image) */}
          <Grid item xs={12} md={6} textAlign="center" marginTop="0%" >
            <img src={homee} alt="Profile" style={{ width: '70%', height: 'auto',marginTop:'18%', borderRadius: 8 , animation: 'float 3s infinite'}} />
          </Grid>

          {/* Right Column (Text) */}
          <Grid item xs={10} md={6} >
          <Typography variant="h2" sx={{ fontFamily: '"Poppins", sans-serif', textAlign: '' , marginTop: '15%',}}>
              <b color='grey'>Advance your Engineering Skills with our Courses</b> {/* Replace with your actual text */}
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins, sans-serif', textAlign: 'center', marginTop: '3%', letterSpacing: '0.5px', fontSize: '1.2rem' }}>
            <Typography
  variant="body1" // or "body2" depending on your design
  sx={{
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'justify',
    fontSize: '1 rem', 
    lineHeight: '1.6',
    padding: '0 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: '',
  }}
>
  Embark on a journey of lifelong learning with our diverse selection of over 20 online courses. Whether you're looking to enhance your professional skills, explore new interests, or pursue personal development, our catalog has something for everyone.
  <br/>
  <br/>
  <br/>
  <br/>
  <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <AvatarGroup total={24}>
              <Avatar alt="Remy Sharp" src={m1} />
              <Avatar alt="Travis Howard" src={m2} />
              <Avatar alt="Agnes Walker" src={m3} />
              <Avatar alt="Trevor Henderson" src={m4} />
              
            </AvatarGroup>
            <span style={{ marginLeft: '35px' }}>20k people already trusted us</span>
          </div>
</Typography>
</Typography>
               </Grid>
        </Grid>
      </Box>



      


      {/* <Grid container direction ="column" alignItems="center" justify="center" marginTop="5.5%" font fontStyle="" bgcolor="" marginLeft="15%">

    <Box sx={{ width: '200%', maxWidth: 750 }}>
      
      <Typography variant="h2" gutterBottom>
      <b>   Advance your engineering 
        skills with our courses</b>
      </Typography>
        <p>Build skills with our courses and mentor from world-class companies.</p>
      
    </Box>
    </Grid> */}







    

      <Container maxWidth="lg" marginTop="4%">
        <Grid container direction="column" marginLeft="3.9%" marginTop="5%">
          <Box sx={{ width: '200%', maxWidth: 840 }}>
            <Typography variant="h3" gutterBottom marginTop="4%" marginLeft="2.5%" >
              <b>Embark your Career Opportunity</b>
              <br/>
              <b>with our Courses</b>
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
            <img src={v.img} alt={v.name}  style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '10px' }} />
            <p style={{color:'white'}}><b>{v.name}</b></p>
          </div>
        </div>
      </Link>
    );
  })}
</div>



<Box sx={{ marginTop: 5.9, padding: 4, marginLeft:"10%" ,marginRight:"0%",backgroundColor:"",width:"104%"}}>
        <Grid container spacing={3}>
          {/* Left Column (Image) */}
          <Grid item xs={12} md={6} textAlign="center" marginTop="0%" >
            <img src={rev} alt="Profile" style={{ width: '70%', height: 'auto',marginTop:'18%', borderRadius: 8 , animation: 'float 3s infinite'}} />
          </Grid>

          {/* Right Column (Text) */}
          <Grid item xs={10} md={6} >
          <Typography variant="h2" sx={{ fontFamily: '"Poppins", sans-serif', textAlign: '' , marginTop: '15%',}}>
              <b color='grey'>What our happy students say</b> {/* Replace with your actual text */}
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins, sans-serif', textAlign: 'center', marginTop: '3%', letterSpacing: '0.5px', fontSize: '1.2rem' }}>
            <Typography
  variant="body1" // or "body2" depending on your design
  sx={{
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'justify',
    fontSize: '1 rem', 
    lineHeight: '1.6',
    padding: '0 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: '',
  }}
>
Hear from our satisfied learners about their experience with our courses.        Don't just take our word for it, see what they have to say!


  <br/>
  <br/>
  <br/>
  <br/>

</Typography>
</Typography>
               </Grid>
        </Grid>
        {/* <hr/> */}
      </Box>
      

{/* {product.map((v) => {
    return (
          <p>{v.name}</p>
    );
  })} */}


      </Container>

      {/* <Grid container direction="column" mt={3} marginTop="5%" marginLeft="8%" >
        <Typography variant="h3" gutterBottom marginTop="5%">
          <b>Mentors</b>
        </Typography>
        <Grid container direction="row" marginRight="10%" marginLeft="-2%" marginTop="3%">
          <MentorCard name="Mark - web dev" image={m1} />
          <MentorCard name="shah - UX & UI" image={m2} />
          <MentorCard name="John - node dev" image={m3} />
          <MentorCard name="Rio - java dev" image={m4} />
        </Grid>
      </Grid> */}

      {/* <Grid container direction="column" marginTop="3%" marginLeft="-4.8%" bgcolor="" mt={6}>
      <Box sx={{ width: '100%', maxWidth: 970, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom marginTop="8%">
          <b>What our happy students say...</b>
        </Typography>
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
    </Grid> */}
    </Grid>
    <br/>


    <Box sx={{ marginLeft: "8.6%" }}>
      <Grid container spacing={2}>
        {[darkTheme].map((theme, index) => (
          <Grid item xs={11} key={index}>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: '#101629',
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr 1fr' },
                  gap: 2,
                }}
              >
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <Item key={index} elevation={2} style={{ backgroundColor: '#00000d' }}>
                    <Avatar alt={names[index]} src={profilePics[index]} sx={{ marginRight: '10px' }} />
                    <div style={{ flex: '1', marginRight: '10px' }}>
                      <strong>{names[index]}</strong>
                      <br />
                      "{comments[index]}"
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <Rating name={`rating-${index}`} value={5} readOnly />
                    </div>
                  </Item>
                ))}
              </Box>
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>
    </Box>


    <Typography variant="h4" sx={{ fontFamily: '"Poppins", sans-serif', textAlign: 'center' , marginTop: '5%',marginBottom:'5%'}}>
              <b color='grey'>Frequently asked questions</b> {/* Replace with your actual text */}
    </Typography>







    <div style={{ textAlign: 'left', marginLeft: '30px', fontSize: '21px' }}>
      {faqs.map((faq, index) => (
        <div key={index} style={{ marginBottom: '15px', display: 'block' }}>
          <div
            style={{ cursor: 'pointer', fontWeight: '' }}
            onClick={() => toggleFAQ(index)}
          >

            <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px',paddingTop: '15px'  }}>{faq.question}</div>
            {faq.isOpen ? '' : ''}
          </div>
          {faq.isOpen && (
            <>
              <p>{faq.answer}</p>
            </>
          )}
        </div>
      ))}
    </div>






<br/>
<br/>
<br/>


    <hr/>
      <Box
        component="footer"
        sx={{
          
          backgroundColor: '#101629',
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
              <Typography variant="h6" color="" gutterBottom>
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