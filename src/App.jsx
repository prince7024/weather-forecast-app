import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherCard from './pages/WeatherCard';
import First from './pages/Start';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 


const App = () => {
  return (
    <Router>

       <ToastContainer position="top-center" autoClose={3000} hideProgressBar theme="colored" />

      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/weather" element={<WeatherCard />} />
      </Routes>


    </Router>
  );
};

export default App;

