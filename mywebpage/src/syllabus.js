import * as React from 'react';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { Link } from 'react-router-dom';
 function s() {
  return (
    <Card variant="outlined" sx={{ maxWidth: "100%" }}>
      <Typography level="h1">HTML </Typography>
      <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
        Introduction
      </Typography>
      <Typography>
      HTML stands for Hyper Text Markup Language
<br/>
HTML is the standard markup language for Web pages
<br/>
HTML elements are the building blocks of HTML pagesHTML stands for Hyper Text Markup Language
<br/>
HTML is the standard markup language for Web pages
<br/>
HTML elements are the building blocks of HTML pages
<br/>
<br/>

     </Typography>
     
    </Card>
  );
}
export default s;