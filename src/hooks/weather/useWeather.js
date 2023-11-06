import { useState } from "react";
import { getCurrentWeather } from '../../services/weatherService';

const useWeather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    try {
      setLoading(true);
      const response = await getCurrentWeather(city)

      setWeather(response);
    } catch (err) {
      console.error("Error fetching weather data", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { city, setCity, weather, loading, error, getWeather };
};

export default useWeather;
