import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import pic1 from "./webpic.jpg";
import pic2 from "./webpic.jpg";
import pic3 from "./webpic.jpg";

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

export default function Types3() {
  return (
    <Grid container direction="column" marginTop="3%" marginLeft="4%" bgcolor="" mt={6}>
      <Box sx={{ width: '100%', maxWidth: 970, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom marginTop="8%">
          <b>What our happy students say...</b>
        </Typography>
        <Typography variant="h6" paragraph margi>
          Build skills with our courses and mentorship from world-class companies.
        </Typography>
        <Grid container direction="row" marginTop="7%" marginLeft="10%">
          <EmployeeReviewCard
            name="John Doe"
            position="Software Engineer"
            review="I learned a lot from the courses. Great mentorship!"
            image={pic1}
          />
          <EmployeeReviewCard
            name="Jane Smith"
            position="Data Scientist"
            review="Amazing platform! The courses are top-notch."
            image={pic2}
          />
          <EmployeeReviewCard
            name="Bob Johnson"
            position="UX Designer"
            review="The mentorship program is a game-changer."
            image={pic3}
          />
        </Grid>
      </Box>
    </Grid>
  );
}
