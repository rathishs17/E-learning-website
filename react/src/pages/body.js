import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function Types() {
  return (
    <Grid container direction ="column" alignItems="center" justify="center" marginTop="4.5%" font fontStyle="" bgcolor="" >

    <Box sx={{ width: '200%', maxWidth: 750 }}>
      
      <Typography variant="h2" gutterBottom>
      <b>   Advance your engineering 
        skills with our courses</b>
      </Typography>
        <p>Build skills with our courses and mentor from world-class companies.</p>
      
    </Box>
    </Grid>

  );
}