import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid marginTop="6%" width="30%" marginLeft="35%">
    <Box sx={{ minWidth: 50 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Hours you going to invest</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten hrs</MenuItem>
          <MenuItem value={20}>Twenty hrs</MenuItem>
          <MenuItem value={30}>Thirty hrs</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </Grid>
    
  );
}