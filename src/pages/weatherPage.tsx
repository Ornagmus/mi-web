import { useState, useEffect } from 'react';
import '../imagenes/css/WeatherPage.css';
import NavBar from '../components/atoms/NavBar';

interface WeatherData {
  location: {
    name: string;
    localtime: string;
  };
  current: {
    temp_c: number;
  };
}

const WeatherPage = () => {
  const [data, setData] = useState<WeatherData | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://api.weatherapi.com/v1/current.json?key=21ced9684a904d05a49103515231307&q=Cáceres&aqi=no'
      );
      const jsonData: WeatherData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log('Error al obtener los datos del clima:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderWeatherData = () => {
    if (!data) {
      return <p className="loading">Cargando datos del clima...</p>;
    }

    return (
      <div className="weather-container">
        <h3 className="location">{data.location.name}</h3>
        <div className="weather-info">
          <p className="temperature">{data.current.temp_c}°C</p>
          <p className="localtime">{data.location.localtime}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <NavBar />
      <h1>El Tiempo</h1>
      {renderWeatherData()}
    </div>
  );
};

export default WeatherPage;
