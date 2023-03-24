import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ColorEyeSelect() {
  const [color, setColor] = React.useState('');

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Color eye</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={color}
          label="Color eye"
          onChange={handleChange}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={10}>Brown</MenuItem>
          <MenuItem value={20}>Red</MenuItem>
          <MenuItem value={30}>Blue</MenuItem>
          <MenuItem value={40}>White</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

