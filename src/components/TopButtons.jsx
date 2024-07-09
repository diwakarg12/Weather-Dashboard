/* eslint-disable react/prop-types */
import { Grid, Button } from '@mui/material';

const TopButtons = ({ setQuery }) => {
  const cities = [
    { id: 1, name: 'Mumbai' },
    { id: 2, name: 'New Delhi' },
    { id: 3, name: 'Pune' },
    { id: 4, name: 'Gurugram' },
    { id: 5, name: 'Patna' },
  ];

  return (
    <Grid container spacing={2} justifyContent='center'>
      {cities.map((city) => (
        <Grid item key={city.id}>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setQuery({ q: city.name })}
          >
            {city.name}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopButtons;
