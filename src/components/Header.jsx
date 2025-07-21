import React from 'react';
import SearchBox from './SearchBox';

const Header = ({ city, setCity, onSubmit, displayCity, dateTime, isCelsius, setIsCelsius }) => {
  const formatDateTime = (date) => {
    const day = date.toLocaleDateString('en-GB', { weekday: 'long' });
    const fullDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
    const time = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    return `${day} | ${fullDate} | ${time}`;
  };

  return (
    <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
      <div>
        <h1 className="text-4xl font-bold">{displayCity || 'City'}</h1>
        <p className="text-white/80 mt-1 text-sm">{formatDateTime(dateTime)}</p>
      </div>

      <div className="flex items-center gap-2">
        <SearchBox city={city} setCity={setCity} onSubmit={onSubmit} rounded={false} />
        <select
          value={isCelsius ? 'celsius' : 'fahrenheit'}
          onChange={(e) => setIsCelsius(e.target.value === 'celsius')}
          className="text-xs px-4 py-[9px] bg-white/10 border border-white/30 text-white rounded-full focus:outline-none appearance-none"
        >
          <option className="text-black" value="celsius">°C</option>
          <option className="text-black" value="fahrenheit">°F</option>
        </select>
      </div>
    </div>
  );
};

export default Header;

