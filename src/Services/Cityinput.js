import React from 'react'

export default async function Cityinput(city, countryCode = 'us') {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=8e02b0db85b4a729b31b20a4e496b448&units=imperial`)
    const data = await promise.json();
    let Weather = data
  return Weather
}
