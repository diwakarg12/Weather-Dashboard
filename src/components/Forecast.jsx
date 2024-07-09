/* eslint-disable react/prop-types */
// import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const Forecast = ({ title, data }) => {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant='h5' align='center' gutterBottom>
          {title}
        </Typography>
        <Grid container spacing={2} justifyContent='center'>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
              <Card>
                <CardContent align='center'>
                  <Typography variant='h6'>{item.title}</Typography>
                  <img src={item.icon} alt='weather icon' />
                  <Typography variant='body1'>{item.temp}°</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Forecast;
