import React, { useState, useEffect, ReactNode, createContext } from "react";
import { getCurrentWeather } from "../services/Axios/Requests/weatherService";
import { WeatherContextType } from "./WeatherContext.type";

const WeatherContext = createContext<WeatherContextType>({
  city: "",
  setCity: () => {},
  weatherData: null,
  loading: false,
});

export const WeatherProvider = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {

  const [city, setCity] = useState("Tehran");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const data = await getCurrentWeather(city);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
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

export { WeatherContext };
