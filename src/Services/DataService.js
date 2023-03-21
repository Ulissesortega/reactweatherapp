import React from "react";
import Geolocation from "./Geolocation";

export default async function GetWeather(latitude, longitude){
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=8e02b0db85b4a729b31b20a4e496b448`)

  
  const data = await promise.json();
  console.log(data)
  let weatherApi = data
  let initiallocation = weatherApi.name
  let currentweather = weatherApi.main.feels_like
}

