/* eslint-disable react/prop-types */
// import React from 'react';
import { Grid, Typography, Card, CardContent } from '@mui/material';

const TempAndDetail = ({ weather, units }) => {
  const {
    temp,
    feels_like,
    temp_max,
    temp_min,
    humidity,
    speed,
    details,
    icon,
  } = weather;

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Grid container spacing={2} justifyContent='center' alignItems='center'>
          <Grid item xs={12} md={4}>
            <Typography align='center' variant='h3'>
              {temp.toFixed()}°{units === 'metric' ? 'C' : 'F'}
            </Typography>
            <img src={icon} alt='weather icon' />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography align='center' variant='h5'>
              {details}
            </Typography>
            <Typography align='center' variant='body1'>
              Feels like: {feels_like.toFixed()}°
              {units === 'metric' ? 'C' : 'F'}
            </Typography>
            <Typography align='center' variant='body1'>
              Max: {temp_max.toFixed()}°{units === 'metric' ? 'C' : 'F'}
            </Typography>
            <Typography align='center' variant='body1'>
              Min: {temp_min.toFixed()}°{units === 'metric' ? 'C' : 'F'}
            </Typography>
            <Typography align='center' variant='body1'>
              Humidity: {humidity}%
            </Typography>
            <Typography align='center' variant='body1'>
              Wind: {speed.toFixed()} {units === 'metric' ? 'm/s' : 'mph'}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TempAndDetail;
