import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function Types1() {
  return (
    <Grid container direction ="column" marginLeft="11%" marginTop="6%" font fontStyle="" bgcolor="" >

    <Box sx={{ width: '200%', maxWidth: 750 }}>
      
      <Typography variant="h3" gutterBottom marginTop="4%">
      <b>  Our Course</b>
      </Typography>
      <h3>Web Development</h3>
      
    </Box>
    </Grid>

  );
}