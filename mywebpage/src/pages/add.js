import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';

const AdFreeBanner = () => {
  const [isNewUser, setNewUser] = useState(false);

  useEffect(() => {
    const isNew = localStorage.getItem('isNewUser');
    setNewUser(!isNew);
  }, []);

  const handleDismiss = () => {
    setNewUser(false);
    localStorage.setItem('isNewUser', 'false');
  };

  if (!isNewUser) {
    return null;
  }

  return (
    <Box sx={{ width: '100%', bgcolor: 'info.main', p: 2 }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="body2" color="info.contrastText">
          Enjoy an ad-free experience! Sign up now!
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleDismiss}>
          Dismiss
        </Button>
      </Grid>
    </Box>
  );
};

export default function addd() {
  return (
    <div>
      <AdFreeBanner />
      {/* Rest of your application */}
    </div>
  );
}
