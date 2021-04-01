import axios from 'axios';
import React from 'react';

const Form = (props) => {
  const {API_KEY, input, setInput, temp, setTemp, minTemp, setMinTemp, maxTemp, setMaxTemp, weather, setWeather, country, setCountry, date, setDate } = props;
 
  const convertKelvinToFahrenheit = (tp)=>{
    console.log((tp - 273.15)* 9/5 + 32);
    const num = (tp - 273.15)* 9/5 + 32;
    return Math.round(num * 100) / 100;
  }
  
  const getDayAndDate = () =>{
  const d = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = days[d.getDay()];
  console.log("day: ", day);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const mon = months[d.getMonth()];
  console.log("mon: ", mon);
  const date = d.getDate()
  console.log("date: ", date);
  const year = d.getFullYear()
  console.log("year: ", year);
  return `${day}, ${mon} ${date}, ${year}`;
  };

  const getDataFromApi = (event) =>{
    setInput(event.target.value);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`;
    axios.get(url).then(response =>{
      console.log("response: ", response.data);
      console.log("temp: ", response.data.main.temp);
      setTemp(convertKelvinToFahrenheit(response.data.main.temp));
      console.log("mintemp: ", response.data.main.temp_min);
      setMinTemp(convertKelvinToFahrenheit(response.data.main.temp_min))
      console.log("maxtemp: ", response.data.main.temp_max);
      setMaxTemp(convertKelvinToFahrenheit(response.data.main.temp_max));
      console.log("country: ", response.data.sys.country);
      setCountry(response.data.sys.country);
      console.log("weather: ", response.data.weather[0].main);
      setWeather(response.data.weather[0].main);
      setDate(getDayAndDate());
    }).catch(error=>{
      console.log(error);
    });
  };
  return (
    <div>
      <form className="search-form">
        <input 
        placeholder="Enter the city name"
        onChange={ getDataFromApi }
        />
      </form>  
       
    </div>
  )
}

export default Form;

