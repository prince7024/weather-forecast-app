import React from 'react';

const ForecastRow = ({ forecast, isCelsius }) => {
  const getTemp = (c, f) => (isCelsius ? `${Math.round(c)}°C` : `${Math.round(f)}°F`);

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
      {forecast.forecastday.map((day, idx) => (
        <div key={idx} className="flex flex-col items-center gap-1">
          <p className="text-sm font-semibold">
            {new Date(day.date).toLocaleDateString('en-GB', { weekday: 'long' })}
          </p>
          <img
            src={`https:${day.day.condition.icon}`}
            alt="icon"
            className="w-10 h-10"
          />
          <p className="text-sm">
            {getTemp(day.day.maxtemp_c, day.day.maxtemp_f)} / {getTemp(day.day.mintemp_c, day.day.mintemp_f)}
          </p>
          <p className="text-xs text-white/70">{day.day.condition.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastRow;



