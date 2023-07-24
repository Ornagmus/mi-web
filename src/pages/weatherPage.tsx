import React, { useState, useEffect } from 'react';
import '../imagenes/css/WeatherPage.css'
import NavBar from '../components/atoms/NavBar';

const WeatherPage = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'http://api.weatherapi.com/v1/forecast.json?key=1d172d3904e246849d3183628230802&q=Stockholm&days=6&aqi=no&alerts=no'
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log('Error al obtener los datos del clima:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <p className="loading">Cargando datos del clima...</p>;
  }

  return (

    <div>
    <NavBar />
    <h1>El Tiempo</h1>
    <div className="weather-container">
      <h3 className="location">{data.location.name}</h3>
      <div className="weather-info">
        <p className="temperature">{data.current.temp_c}°C</p>
        <p className="localtime">{data.location.localtime}</p>
      </div>
    </div>
    </div>
  );
};

export default WeatherPage;
