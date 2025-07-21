import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import CurrentInfo from '../components/CurrentInfo';
import ForecastRow from '../components/ForecastRow';

const WeatherCard = () => {
  const location = useLocation();
  const [city, setCity] = useState(location?.state?.city || '');
  const [displayCity, setDisplayCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [dateTime, setDateTime] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async () => {
    if (!city) return;
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=yes&alerts=no`
      );
      setWeather(res.data);
      setDisplayCity(city.charAt(0).toUpperCase() + city.slice(1).toLowerCase());
    } catch {
      toast.error('City not found. Please enter a valid city.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="relative min-h-screen w-full bg-[url('/mainbg.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4">

     
      
      {/* Weather content container */}
      <div className="relative w-full max-w-6xl p-10 text-white z-10">
        <Header
          city={city}
          setCity={setCity}
          onSubmit={handleSubmit}
          displayCity={displayCity}
          dateTime={dateTime}
          isCelsius={isCelsius}
          setIsCelsius={setIsCelsius}
        />

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-white/30 border-t-white" />
          </div>
        ) : (
          weather && (
            <>
              <CurrentInfo weather={weather} isCelsius={isCelsius} />
              <ForecastRow forecast={weather.forecast} isCelsius={isCelsius} />
            </>
          )
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
