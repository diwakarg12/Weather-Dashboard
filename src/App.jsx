import { useEffect, useState } from 'react';
import './App.css';
import Input from './components/Input';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';
import TempAndDetail from './components/TempAndDetail';
import FavoriteCities from './components/FavoriteCities';
import toast, { Toaster } from 'react-hot-toast';
import { Container, Box } from '@mui/material';
import Chart from './components/Chart';

function App() {
  const [query, setQuery] = useState({ q: 'new delhi' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const getWeather = async () => {
    const cityName = query.q ? query.q : 'Current Location';
    const toastId = toast.loading(
      `Fetching weather data for ${capitalizeFirstLetter(cityName)}`
    );

    try {
      const data = await getFormattedWeatherData({ ...query, units });
      toast.dismiss(toastId);
      setWeather(data);
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
    } catch (error) {
      toast.error('Failed to fetch weather data. Please try again later.');
    }
  };

  const formatBackground = () => {
    if (!weather) return 'from-cyan-600 to-blue-700';
    const threshold = units === 'metric' ? 20 : 60;

    if (weather.temp <= threshold) return 'from-cyan-600 to-blue-700';
    return 'from-yellow-600 to-orange-700';
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  return (
    <Container
      className={`mx-auto my-4 py-5 px-4 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}
      sx={{
        maxWidth: '100%',
        minHeight: '100vh',
        padding: { xs: '10px', md: '40px' },
      }}
    >
      <Box sx={{ mb: 4 }}>
        <TopButtons setQuery={setQuery} />
      </Box>
      <Box sx={{ mb: 4 }}>
        <Input setQuery={setQuery} setUnits={setUnits} />
      </Box>
      <Box sx={{ mb: 4 }}>
        <FavoriteCities setQuery={setQuery} />
      </Box>
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetail weather={weather} units={units} />
          <Forecast title='3 Hour Step Forecast' data={weather.hourly} />
          <Forecast title='5 Day Forecast' data={weather.daily} />{' '}
          <Chart data={weather.daily} />
        </>
      )}
      <Toaster position='	top-right' />
    </Container>
  );
}

export default App;
