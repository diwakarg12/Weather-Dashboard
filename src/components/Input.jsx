/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Grid, TextField, IconButton, Button } from '@mui/material';
import { BiSearchAlt2, BiCurrentLocation } from 'react-icons/bi';

const Input = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    if (city !== '') setQuery({ q: city });
    setCity('');
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  return (
    <Grid container spacing={2} justifyContent='center'>
      <Grid item xs={12} md={8}>
        <TextField
          fullWidth
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          placeholder='Search by City'
          variant='outlined'
        />
      </Grid>
      <Grid item>
        <IconButton onClick={handleSearchClick}>
          <BiSearchAlt2 size={30} />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton onClick={handleLocationClick}>
          <BiCurrentLocation size={30} />
        </IconButton>
      </Grid>
      <Grid item>
        <Button
          sx={{ fontSize: '1.5rem', fontWeight: '600', color: 'white' }}
          onClick={() => setUnits('metric')}
        >
          °C
        </Button>
      </Grid>
      <Grid item>
        <Button
          sx={{ fontSize: '1.5rem', fontWeight: '600', color: 'white' }}
          onClick={() => setUnits('imperial')}
        >
          °F
        </Button>
      </Grid>
    </Grid>
  );
};

export default Input;
