import './App.css';
import Form from "./components/Form";
import {useState} from "react";
import Weather from "./components/Weather";
function App() {
  const API_KEY = process.env.REACT_APP_WEATHER_APP_API_KEY;

  const [input, setInput] = useState("");
  const [temp, setTemp] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [weather, setWeather] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  
  return (
    <div className="App">
      <Form     
      API_KEY = {API_KEY}
      input = {input}
      setInput = {setInput}
      temp={temp}
      setTemp={setTemp}
      minTemp={minTemp}
      setMinTemp = {setMinTemp}
      maxTemp = {maxTemp}
      setMaxTemp={setMaxTemp}
      weather={weather}
      setWeather={setWeather}
      country={country}
      setCountry={setCountry}
      date={date}
      setDate={setDate}
      />
      <Weather
      input={input} 
      temp={temp}
      setTemp={setTemp}
      minTemp={minTemp}
      setMinTemp = {setMinTemp}
      maxTemp = {maxTemp}
      setMaxTemp={setMaxTemp}
      weather={weather}
      setWeather={setWeather}
      country={country}
      setCountry={setCountry}
      date={date}/>
    </div>
  );
}

export default App;
