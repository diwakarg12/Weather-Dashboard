/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
  Grid,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const FavoriteCities = ({ setQuery }) => {
  const [favoriteCities, setFavoriteCities] = useState([]);
  const [open, setOpen] = useState(false);
  const [newCity, setNewCity] = useState('');

  const handleSaveCity = () => {
    if (newCity !== '') {
      setFavoriteCities([...favoriteCities, newCity]);
      setNewCity('');
      setOpen(false);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isFavorite = (city) => favoriteCities.includes(city);

  return (
    <Grid container spacing={2} justifyContent='center' sx={{ mb: 4 }}>
      {favoriteCities.map((city, index) => (
        <Grid item key={index}>
          <Button
            variant='outlined'
            onClick={() => setQuery({ q: city })}
            sx={{
              backgroundColor: isFavorite(city) ? 'white' : 'inherit',
              color: isFavorite(city) ? 'black' : 'inherit',
            }}
          >
            {city}
          </Button>
        </Grid>
      ))}
      <Grid item>
        <Button variant='contained' onClick={handleClickOpen}>
          Add Favorite
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add a Favorite City</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter the name of the city you want to add to your favorites.
            </DialogContentText>
            <TextField
              autoFocus
              margin='dense'
              label='City Name'
              type='text'
              fullWidth
              variant='standard'
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSaveCity}>Save</Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default FavoriteCities;
