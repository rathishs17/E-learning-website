import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import image1 from"./webpic.jpg";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345, marginLeft:"10%" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={  image1}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" marginLeft="1%">
          HTML, CSS, JavaScript
        </Typography>
        <Typography variant="body2" color="text.secondary" marginLeft="1%">
          HTML,CSS,JavaScript are the most widely used languages in the field of web development.
        </Typography>
      </CardContent>
    
    </Card>
  );
}