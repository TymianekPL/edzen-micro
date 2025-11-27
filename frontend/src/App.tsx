import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type WeatherForecast = {
    date: string;
    temperatureC: number;
    summary: "Cool" | "Chilly" | "Mild" | "Warm";
    temperatureF: number;
};

function App() {
  const [forecast, setForecast] = useState<WeatherForecast[]>([]);
  useEffect(() => {
      fetch("http://localhost:7152/weatherforecast").then(response => response.json() as WeatherForecast[]).then(data => setForecast(data));
  }, []);

  return (
    <>
        {forecast.forEach(entry => {
            <p>{entry.summary}</p>
        })}
    </>
  )
}

export default App
