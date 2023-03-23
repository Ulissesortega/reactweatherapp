import React from 'react'
import Currentcity from './Currentcity';

export default async function Weekweather(latitude, longitude) {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?&lat=${latitude}&lon=${longitude}&units=imperial&appid=8e02b0db85b4a729b31b20a4e496b448`)
    const data = await promise.json();
    //let weatherApi4 = data
    console.log(data)    
  return (
    <div>Weekweather</div>
  )
}

