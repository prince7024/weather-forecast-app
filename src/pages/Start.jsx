import React, { useState } from 'react';
import SearchBox from '../components/SearchBox';
import { useNavigate } from 'react-router-dom';
import sicon from '../assets/sicon.png';
import cloud from '../assets/cloud.png';
import { toast } from 'react-toastify';
import axios from 'axios';

const Start = () => {
  const [city, setCity] = useState('');
  const navigate = useNavigate();
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const trimmedCity = city.trim();
    if (!trimmedCity) {
      toast.error('Please enter a city name');
      return;
    }

    try {
      await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${trimmedCity}`);
      navigate('/weather', { state: { city: trimmedCity } });
    } catch (error) {
      toast.error('City not found. Please enter a valid city.');
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[radial-gradient(circle_at_center,_black,_#0f172a)] flex items-center justify-center px-4 overflow-hidden">

      {/* Animated Clouds */}
      <img src={cloud} alt="cloud" className="absolute top-30 left-15 w-25 animate-[bounce_5s_ease-in-out_infinite]  opacity-70" />
      <img src={cloud} alt="cloud" className="absolute bottom-60 right-20 w-20 animate-[bounce_5s_ease-in-out_infinite]  opacity-60" />
      <img src={cloud} alt="cloud" className="absolute bottom-20 left-40  w-17 animate-[bounce_5s_ease-in-out_infinite] opacity-40" />

      {/* Centered Card */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl w-full max-w-md flex flex-col items-center gap-8 transition-all duration-300 z-10">
        <div className="flex flex-col items-center gap-0">
          <img src={sicon} alt="Search Icon" className="w-30 h-30 drop-shadow-xl" />
          <h1 className="text-4xl font-bold text-white drop-shadow-md text-center">
            Weather Now
          </h1>
        </div>

        <div className="w-[280px] sm:w-[350px]">
          <SearchBox city={city} setCity={setCity} onSubmit={handleSubmit} rounded={true} />
        </div>
      </div>
    </div>
  );
};

export default Start;
