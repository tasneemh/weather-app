import React from 'react';

function Weather(props) { 
  const {temp, setTemp, minTemp, setMinTemp, maxTemp, setMaxTemp, weather, setWeather, country, setCountry, input, date} = props;
  return (
    <div className={` 
        ${weather === "Clouds" ? "clouds" : ""}        
        ${weather === "Mist" ? "mist" : ""}
        ${weather === "Smoke" ? "smoke" : ""}
        ${weather === "Haze" ? "haze" : ""}
        ${weather === "Clear" ? "clear" : ""}
        ${weather === "Rain" ? "rain" : ""}
        ${weather === "Snow" ? "snow" : ""}`
        }>
    <div className="display-details">
        {input && <p className="city-details">{input}{", "}{country}</p>}
        <p className="date">{date} </p>
        {temp && <p className="temp">{temp}{" "}{"\u00B0F"}</p>}
        <p className="weather">{weather}</p>
        {minTemp && maxTemp && <span className="max-min">{minTemp}{" "}{"\u00B0F"} / {maxTemp}{" "}{"\u00B0F"}</span>}   
    </div>
    </div>
  )
}

export default Weather;
