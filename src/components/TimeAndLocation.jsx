/* eslint-disable react/prop-types */
// import React from 'react';
import { Grid, Typography } from '@mui/material';

const TimeAndLocation = ({
  weather: { formattedLocalTime, name, country },
}) => {
  return (
    <Grid container spacing={2} justifyContent='center' sx={{ mb: 4 }}>
      <Grid item xs={12}>
        <Typography align='center' variant='h6'>
          {formattedLocalTime}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography align='center' variant='h4'>
          {`${name}, ${country}`}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TimeAndLocation;
