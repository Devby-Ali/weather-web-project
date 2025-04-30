import React, { createContext, useState, useContext, useEffect } from 'react';
import { getCurrentWeather } from '../services/Axios/Requests/getCurrentWeather';

const WeatherContext = createContext<{
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  weatherData: any;
  loading: boolean;
}>({
  city: '',
  setCity: () => {},
  weatherData: null,
  loading: false,
});

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const data = await getCurrentWeather(city);
      setWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <WeatherContext.Provider value={{ city, setCity, weatherData, loading }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);