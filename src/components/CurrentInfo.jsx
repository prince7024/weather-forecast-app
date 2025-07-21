import React from 'react';

const CurrentInfo = ({ weather, isCelsius }) => {
  const getTemp = (c, f) => (isCelsius ? `${Math.round(c)}°C` : `${Math.round(f)}°F`);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-10">
      <div className="text-center md:text-left mb-6 md:mb-0">
        <div className="text-7xl font-medium">
          {getTemp(weather.current.temp_c, weather.current.temp_f)}
        </div>
        <p className="text-xl capitalize font-light text-white/80 mt-2">
          {weather.current.condition.text}
        </p>
      </div>

      <div className="flex items-center gap-6">
        <img
          src={`https:${weather.current.condition.icon}`}
          alt="Weather Icon"
          className="w-35 h-30 hover:scale-130 transition-transform duration-300"

        />

        <div className="flex flex-col gap-3 text-sm sm:text-base text-white/90">
          <div className="flex items-center gap-2">
            🌡️ Feels like: {getTemp(weather.current.feelslike_c, weather.current.feelslike_f)}
          </div>
          <div className="flex items-center gap-2">
            💧 Humidity: {weather.current.humidity}%
          </div>
          <div className="flex items-center gap-2">
            🌬️ Wind: {weather.current.wind_kph} km/h
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentInfo;


