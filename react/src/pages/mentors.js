import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import pic from "./webpic.jpg";
import mohan from "./mohandas.jpg"
import mark from "./mark.jpg"
import ana from "./anade.jpg"
import virat from "./virat1.jpg"
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

export default function Types2() {
  return (
    <Grid container direction="column"  mt={3} marginTop="5%" marginLeft="12%">
      <Typography variant="h3" gutterBottom marginTop="5%">
       <b>Mentors</b> 
      </Typography>
      <Grid container direction="row"  marginRight="19%" marginTop="3%">
        <MentorCard name="Mark Zuckerberg" image={mark} />
        <MentorCard name="Mohan Das" image={mohan} />
        <MentorCard name="Ana de armas" image={ana} />
        <MentorCard name="Virat Kohli" image={virat} />

        {/* Add more MentorCard components for additional mentors */}
      </Grid>
    </Grid>
  );
}
