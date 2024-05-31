import {useState, useEffect} from 'react'
import Loader from './Loader'
import cloudy from './assets/cloudy.svg'
import cloudy_night from './assets/cloudy+night.svg';
import cloudy_sun from './assets/cloudy+sun.svg';
import moon from './assets/moon.svg'
import rain_cloud from './assets/rain+cloud.svg';
import rain_sun from './assets/rain+sun.svg';
import sun from './assets/sun.svg';
import thunder from './assets/thunder.svg';
import StrongRainy from './assets/StrongRainy.svg';
import "./weather.css"


function fetchWeatherData(location) {
  location = location.position;
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocationAndWeather = async () => {
      try {
        // Fetch location data
        const mapsApiUrl = `https://nominatim.openstreetmap.org/search?q=${location}&format=json&polygon_kml=1&addressdetails=1`;
        const locationResponse = await fetch(mapsApiUrl);
        const locationData = await locationResponse.json();
        console.log(locationData)
        

        // Check if location data is available
        if (locationData && locationData.length > 0) {
          const position = `${locationData[0].lat},${locationData[0].lon}`;

          // Fetch weather data
          const apiKey = 'Vb7CqXlBMysoAqDUniEMCVlS7A0yrKeQ'; // Replace with your actual API key
          const weatherApiUrl = `https://api.tomorrow.io/v4/weather/forecast?location=${position}&apikey=${apiKey}`;
          const weatherResponse = await fetch(weatherApiUrl);
          const weatherData = await weatherResponse.json();

          // Set weather data
          setWeatherData(weatherData.timelines.hourly);
        } else {
          throw new Error('Location data not found');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLocationAndWeather();
  }, [location]);
  console.log(weatherData)
  return { loading, weatherData, error };
}

function getWeatherCondition(weatherCode) {
  const d = new Date();
  let hour = d.getHours();
  var time;
  if(hour > 18 || (hour >= 0 && hour <= 6)) time = "night";
  else time = "day";
  switch(time){
    case("night"):
    switch (weatherCode) {
      case 1000:
        return {"source":moon,"condition":'Clear'};
      case 1100:
        return {"source":moon,"condition":'Mostly Clear'};
      case 1101:
        return {"source":cloudy_night,"condition":'Partly Cloudy'};
      case 1102:
        return {"source":cloudy,"condition":'Mostly Cloudy'};
      case 1001:
        return {"source":cloudy,"condition":'Cloudy'};
      case 2000:
      case 2100:
        return {"source":cloudy,"condition":'Fog'};
      case 3000:
        return  {"source":cloudy,"condition":'Light Wind'};
      case 3001:
        return {"source":cloudy,"condition":'Wind'};
      case 3002:
        return {"source":cloudy,"condition":'Strong Wind'};
      case 4000:
        return {"source":rain_cloud,"condition":'Drizzle'};
      case 4001:
        return {"source":rain_cloud,"condition":'Rain'};
      case 4200:
        return {"source":rain_cloud,"condition":'Light Rain'};
      case 4201:
        return {"source":StrongRainy,"condition":'Heavy Rain'};
      case 8000:
        return {"source":thunder,"condition":'Thunderstorm'};
      default:
        return 'Unknown';
    }

    case("day"):
    switch (weatherCode) {
      case 1000:
        return {"source":sun,"condition":'Clear'};
      case 1100:
        return {"source":sun,"condition":'Mostly Clear'};
      case 1101:
        return {"source":cloudy_sun,"condition":'Partly Cloudy'};
      case 1102:
        return {"source":cloudy,"condition":'Mostly Cloudy'};
      case 1001:
        return {"source":cloudy,"condition":'Cloudy'};
      case 2000:
      case 2100:
        return {"source":cloudy,"condition":'Fog'};
      case 3000:
        return {"source":cloudy,"condition":'Light Wind'};
      case 3001:
        return {"source":cloudy,"condition":'Wind'};
      case 3002:
        return {"source":cloudy,"condition":'Strong Wind'};
      case 4000:
        return {"source":rain_cloud,"condition":'Drizzle'};
      case 4001:
        return {"source":rain_cloud,"condition":'Rain'};
      case 4200:
        return {"source":rain_sun,"condition":'Light Rain'};
      case 4201:
        return {"source":StrongRainy,"condition":'Heavy Rain'};
      case 8000:
        return {"source":thunder,"condition":'Thunderstorm'};
      default:
        return 'Unknown';
    }
  }
 
}


function Weather( location ) {
  const { loading, weatherData, error } = fetchWeatherData(location);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>No weather data available</div>;
  }

  // Limit the forecast to the first 5 data points
  const limitedForecast = weatherData.slice(0, 5).map((dataPoint, index) => {
    const weatherCondition = getWeatherCondition(dataPoint.values.weatherCode);
    return [weatherCondition, dataPoint];
  });

  // Get the current weather condition
  const currentWeatherIndex = 0; // Assuming the first element is the current weather
  const currentWeather = getWeatherCondition(weatherData[currentWeatherIndex].values.weatherCode);

  return (
    <>
      <div className='flex justify-center items-center h-1/3 grid grid-row-2'>
        <div className="weather-container m-auto">
          <div className="weather-icon"><img src={currentWeather['source']} alt="" /></div>
          <div className="Hourplace">{new Date().getHours()}:00</div>
          <div className="temperature">{weatherData[currentWeatherIndex].values.temperature}</div>
          <div className="weather-status">{currentWeather['condition']}</div>
        </div>

        <div className="weather-forecast grid grid-cols-3 md:grid-cols-5 m-auto mt-4">
          {limitedForecast.map((forecast_data, index) => (
            <div key={index} className={`weather-container m-auto h-auto ${index >= 3 ? "hidden" : ""} md:block`}>
              <div className="weather-icon">
                <img src={forecast_data[0]['source']} alt="" />
              </div>
              <div className="Hourplace">{new Date().getHours() + index}:00</div>
              <div className="temperature">{forecast_data[1].values.temperature}</div>
              <div className="weather-status">{forecast_data[0]['condition']}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Weather;





