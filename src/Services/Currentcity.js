import React from 'react'
import GeoLocation from './Geolocation';
import Weekweather from './Weekweather';

export default async function Currentcity(latitude, longitude) {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=8e02b0db85b4a729b31b20a4e496b448`)
    const data = await promise.json();
    //weatherApi3 = data
    Weekweather(latitude, longitude)
   
  return (
    <div>CurrentCity</div>
  )
}
